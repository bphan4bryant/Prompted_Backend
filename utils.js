const fs = require('fs');
const axios = require('axios');

function findUser(users, username) {
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username) {
            return users[i];
        }
    }
    return null;
}

function findWinner(users) {
    let max = {
        name : null,
        points : 0
    };
    
    for (let i = 0; i < users.length; i++) {
        
    }
    return null;
}

function pickRandomImage(files) {
    let idx = Math.floor(Math.random() * 3);
    return files[idx];
}


async function generateImage(prompt) {
    console.log(prompt);
    // Define the DALL-E Image API URL
    const url = 'https://dall-e-image.openai.com/v1/images:generate';
    // Define the DALL-E Image API key
    // Replace this with your own key
    const key = process.env.OPEN_AI_KEY;
    console.log(key);
    // Define the DALL-E Image API parameters
    const params = {
    text: prompt,
    num_images: 4,
    diversity: 0.5,
    truncation: 0.7,
    size: [256, 256]
    };
    try {
    // Make a POST request to the DALL-E Image API with Axios
    const response = await axios.post(url, params, {
    headers: {
    'Authorization': `Bearer ${key}`
    }
    });
    // Get the data from the response
    const data = response.data;
    console.log(data);
    // Check if the data is valid
    if (!data || !data.images) {
    // Return an error message if not
        console.log('Something went wrong with the DALL-E Image API');
    return;
    }
    // Return the data as JSON
    return(json(data));
    } catch (error) {
    // Handle any errors
        console.error(error);
        console.log('Something went wrong with the server');
    }
}

module.exports = { findUser, findWinner, pickRandomImage, generateImage};