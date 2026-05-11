import { faBathtub, faBed, faUsers, faGear, faGasPump, faWifi, faLocationPin, faRuler, faFile, faRoad, faCheck } from "@fortawesome/free-solid-svg-icons";
import { supabase } from './supabaseClient';

export const iconMap = {
    faBathtub, faBed, faUsers, faGear, faGasPump, faWifi, faLocationPin, faRuler, faFile, faRoad, faCheck
};

export const defaultListings = [
    {
        title: 'Luxury 3BR Apartment',
        category: 'airbnb',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Victoria Island, Lagos',
        price: '₦85,000',
        price_unit: '/night',
        description: 'Experience luxury living in the heart of Victoria Island. This 3-bedroom apartment features modern amenities, a stunning view, and easy access to the city\'s best restaurants and business centers.',
        features: [
            { iconName: 'faBed', label: '3 beds' },
            { iconName: 'faBathtub', label: '2 baths' },
            { iconName: 'faWifi', label: 'Wifi' }
        ]
    },
    {
        title: 'Mercedes-Benz S-Class',
        category: 'cars',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: '2023 model',
        price: '₦120,000',
        price_unit: '/day',
        description: 'Ride in comfort and style with the 2023 Mercedes-Benz S-Class. Perfect for corporate events, weddings, or a luxurious day out in the city.',
        features: [
            { iconName: 'faUsers', label: '5 seats' },
            { iconName: 'faGear', label: 'Auto' },
            { iconName: 'faGasPump', label: 'Petrol' }
        ]
    },
    {
        title: 'Prime Estate Land',
        category: 'real estate',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        location: 'Lekki phase 2, Lagos',
        price: '₦25M',
        price_unit: '/plot',
        description: 'Secure your future with this prime estate land in Lekki Phase 2. Featuring a serene environment, tarred roads, and complete documentation including C of O.',
        features: [
            { iconName: 'faRuler', label: '600sqm' },
            { iconName: 'faFile', label: 'C of O' },
            { iconName: 'faRoad', label: 'Tarred' }
        ]
    }
];

export const getListings = async () => {
    console.log('Fetching listings from Supabase...');
    const { data, error } = await supabase
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Error fetching listings:', error.message);
        return [];
    }
    console.log(`Successfully fetched ${data?.length || 0} listings`);
    return data;
};

export const addListing = async (newListing) => {
    console.log('Attempting to add new listing to Supabase:', newListing);
    const { data, error } = await supabase
        .from('listings')
        .insert([newListing])
        .select();
    
    if (error) {
        console.error('Error adding listing:', error.message);
        return null;
    }
    console.log('Listing added successfully:', data[0]);
    return data[0];
};

export const updateListing = async (id, updatedData) => {
    const { data, error } = await supabase
        .from('listings')
        .update(updatedData)
        .eq('id', id)
        .select();
    
    if (error) {
        console.error('Error updating listing:', error);
        return null;
    }
    return data[0];
};

export const deleteListing = async (id) => {
    const { error } = await supabase
        .from('listings')
        .delete()
        .eq('id', id);
    
    if (error) {
        console.error('Error deleting listing:', error);
        return false;
    }
    return true;
};

export const getListingById = async (id) => {
    const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('id', id)
        .single();
    
    if (error) {
        console.error('Error fetching listing by ID:', error);
        return null;
    }
    return data;
};

// Utility to seed database if empty
export const seedDatabase = async () => {
    const listings = await getListings();
    if (listings.length === 0) {
        const { error } = await supabase
            .from('listings')
            .insert(defaultListings);
        if (error) console.error('Error seeding database:', error);
        else console.log('Database seeded successfully!');
    }
};

export const uploadImage = async (file) => {
    if (!file) return null;
    
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `listings/${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('listing-images')
        .upload(filePath, file);

    if (uploadError) {
        console.error('Error uploading image:', uploadError);
        return null;
    }

    const { data: { publicUrl } } = supabase.storage
        .from('listing-images')
        .getPublicUrl(filePath);

    return publicUrl;
};

export const uploadMultipleImages = async (files) => {
    if (!files || files.length === 0) return [];
    
    const uploadPromises = Array.from(files).map(file => uploadImage(file));
    const urls = await Promise.all(uploadPromises);
    return urls.filter(url => url !== null);
};

export const getRandomListings = async (count = 3) => {
    const listings = await getListings();
    if (!listings || listings.length === 0) return [];
    
    // Shuffle and pick count
    return [...listings]
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
};
