import { useState, useEffect } from 'react';
import { addListing, getListings, updateListing, deleteListing, uploadMultipleImages } from '../../utils/listingsData';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [listings, setListings] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    
    const [formData, setFormData] = useState({
        title: '',
        category: 'airbnb',
        image: '',
        gallery: [],
        location: '',
        price: '',
        price_unit: '',
        description: '',
        feature1: '',
        feature2: '',
        feature3: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [adminError, setAdminError] = useState('');
    const [isConfigMissing, setIsConfigMissing] = useState(false);

    useEffect(() => {
        const url = import.meta.env.VITE_SUPABASE_URL;
        const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        
        console.log('Diagnostic - URL exists:', !!url);
        console.log('Diagnostic - Key exists:', !!key);
        if (key) {
            console.log('Diagnostic - Key starts with:', key.substring(0, 5));
            console.log('Diagnostic - Key length:', key.length);
        }

        if (!url || !key) {
            setIsConfigMissing(true);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            const fetchListings = async () => {
                const data = await getListings();
                setListings(data || []);
            };
            fetchListings();
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setSelectedFiles(prev => [...prev, ...files]);
            const newPreviews = files.map(file => URL.createObjectURL(file));
            setImagePreviews(prev => [...prev, ...newPreviews]);
        }
    };

    const removePreview = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const getIconForCategory = (cat, index) => {
            if (cat === 'airbnb') return ['faBed', 'faBathtub', 'faWifi'][index];
            if (cat === 'cars') return ['faUsers', 'faGear', 'faGasPump'][index];
            if (cat === 'real estate') return ['faRuler', 'faFile', 'faRoad'][index];
            return 'faCheck';
        };

        const features = [];
        if (formData.feature1) features.push({ iconName: getIconForCategory(formData.category, 0), label: formData.feature1 });
        if (formData.feature2) features.push({ iconName: getIconForCategory(formData.category, 1), label: formData.feature2 });
        if (formData.feature3) features.push({ iconName: getIconForCategory(formData.category, 2), label: formData.feature3 });

        setIsUploading(true);
        let galleryUrls = [...(formData.gallery || [])];

        // Upload new images if selected
        if (selectedFiles.length > 0) {
            const newUrls = await uploadMultipleImages(selectedFiles);
            galleryUrls = [...galleryUrls, ...newUrls];
        }

        const primaryImage = galleryUrls.length > 0 ? galleryUrls[0] : (formData.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

        const newListing = {
            title: formData.title,
            category: formData.category,
            image: primaryImage,
            gallery: galleryUrls,
            location: formData.location,
            price: formData.price,
            price_unit: formData.price_unit,
            description: formData.description,
            features
        };

        setAdminError('');
        if (editingId) {
            const result = await updateListing(editingId, newListing);
            if (result) {
                setSuccessMessage('Listing updated successfully!');
                setEditingId(null);
            } else {
                setAdminError('Failed to update listing. Please check your Supabase connection and RLS policies.');
                setIsUploading(false);
                return;
            }
        } else {
            const result = await addListing(newListing);
            if (result) {
                setSuccessMessage('Listing added successfully!');
            } else {
                setAdminError('Failed to add listing. Please check your Supabase connection and RLS policies.');
                setIsUploading(false);
                return;
            }
        }
        
        const updatedListings = await getListings();
        setListings(updatedListings || []);
        
        // Reset form
        setFormData({
            title: '',
            category: 'airbnb',
            image: '',
            gallery: [],
            location: '',
            price: '',
            price_unit: '',
            description: '',
            feature1: '',
            feature2: '',
            feature3: ''
        });
        setSelectedFiles([]);
        setImagePreviews([]);
        setIsUploading(false);
        
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleEdit = (listing) => {
        setEditingId(listing.id);
        setFormData({
            title: listing.title,
            category: listing.category,
            image: listing.image,
            gallery: listing.gallery || [listing.image],
            location: listing.location,
            price: listing.price,
            price_unit: listing.price_unit,
            description: listing.description,
            feature1: listing.features && listing.features[0] ? listing.features[0].label : '',
            feature2: listing.features && listing.features[1] ? listing.features[1].label : '',
            feature3: listing.features && listing.features[2] ? listing.features[2].label : ''
        });
        setImagePreviews(listing.gallery || [listing.image]);
        setSelectedFiles([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this listing?')) {
            await deleteListing(id);
            const updatedListings = await getListings();
            setListings(updatedListings || []);
            setSuccessMessage('Listing deleted successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 pt-28 px-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
                        Admin Login
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 pt-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow sm:rounded-lg mb-8">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-2xl leading-6 font-medium text-gray-900 font-serif mb-8">
                            {editingId ? 'Edit Listing' : 'Add New Listing'}
                        </h3>
                        
                        {isConfigMissing && (
                            <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700 font-bold">Supabase Configuration Missing!</p>
                                        <p className="text-xs text-red-600 mt-1">If hosted on Netlify, please add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to your site settings.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {successMessage && (
                            <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-green-700">{successMessage}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {adminError && (
                            <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
                                <div className="flex">
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700">{adminError}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <div className="mt-1">
                                        <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. Luxury 4BR Villa" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <div className="mt-1">
                                        <select name="category" value={formData.category} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border">
                                            <option value="airbnb">Airbnb</option>
                                            <option value="real estate">Real Estate</option>
                                            <option value="cars">Cars</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Gallery (Upload one or more photos)</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                                        {imagePreviews.map((preview, index) => (
                                            <div key={index} className="relative h-32 rounded-lg overflow-hidden border border-gray-200">
                                                <img src={preview} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                                                <button 
                                                    type="button"
                                                    onClick={() => removePreview(index)}
                                                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 shadow-sm"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                        <label className="flex flex-col items-center justify-center h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <span className="mt-2 text-xs text-gray-500">Add Photo</span>
                                            <input type='file' className="hidden" accept="image/*" multiple onChange={handleFileChange} />
                                        </label>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                    <div className="mt-1">
                                        <input type="text" name="location" required value={formData.location} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. Lekki Phase 1, Lagos" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Price</label>
                                    <div className="mt-1">
                                        <input type="text" name="price" required value={formData.price} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. ₦150,000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Price Unit</label>
                                    <div className="mt-1">
                                        <input type="text" name="price_unit" required value={formData.price_unit} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. /night, /day, /plot" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <div className="mt-1">
                                        <textarea name="description" rows={4} value={formData.description} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="Detailed description of the listing..." />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <h4 className="font-medium text-gray-900 mb-2">Features (Optional)</h4>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <input type="text" name="feature1" value={formData.feature1} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. 4 beds" />
                                        <input type="text" name="feature2" value={formData.feature2} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. 3 baths" />
                                        <input type="text" name="feature3" value={formData.feature3} onChange={handleInputChange} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g. Pool" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5">
                                <div className="flex justify-end">
                                    {editingId && (
                                        <button 
                                            type="button" 
                                            onClick={() => {
                                                setEditingId(null);
                                                setFormData({
                                                    title: '', category: 'airbnb', image: '', gallery: [],
                                                    location: '', price: '', priceUnit: '', description: '', feature1: '', feature2: '', feature3: ''
                                                });
                                                setSelectedFiles([]);
                                                setImagePreviews([]);
                                            }}
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button 
                                        type="submit" 
                                        disabled={isUploading}
                                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                    >
                                        {isUploading ? 'Uploading...' : (editingId ? 'Update Listing' : 'Add Listing')}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Listings List */}
                <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-2xl leading-6 font-medium text-gray-900 font-serif mb-6">Manage Listings</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listing</th>
                                        <th scope="col" className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {listings.map((listing) => (
                                        <tr key={listing.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full object-cover" src={listing.image} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{listing.title}</div>
                                                        <div className="text-sm text-gray-500">{listing.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {listing.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {listing.price}{listing.price_unit}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handleEdit(listing)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                                <button onClick={() => handleDelete(listing.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {listings.length === 0 && (
                                <div className="text-center py-8">
                                    <p className="text-gray-500 mb-4">No listings found in the database.</p>
                                    <button 
                                        onClick={async () => {
                                            const { seedDatabase, getListings } = await import('../../utils/listingsData');
                                            await seedDatabase();
                                            const updated = await getListings();
                                            setListings(updated || []);
                                            setSuccessMessage('Database seeded with sample data!');
                                        }}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                                    >
                                        Seed with Sample Data
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
