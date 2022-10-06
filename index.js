const axios = require('axios');

async function getFirstAlbumTitle() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    console.log(response.data[0].title)
    return response.data[0].title;
}

module.exports = getFirstAlbumTitle;
