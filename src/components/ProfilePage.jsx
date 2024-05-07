import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch username and additional user data
        const fetchData = async () => {
            try {
                // Fetch username from session token or cookie
                const username = await fetchUsername();
                setUsername(username);

                // Fetch additional user data from API
                const response = await fetch(`/api/user/${username}`);
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div>
            <h1>Welcome, {username}</h1>
            {/* Display additional user data */}
            {userData && (
                <div>
                    <p>Email: {userData.email}</p>
                    <p>Role: {userData.role}</p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
        </div>
    );
};

export default ProfilePage;