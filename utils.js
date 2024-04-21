const fs = require('fs');

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

function getPromptImage() {
    var files = fs.readdirSync('./assets/');
    var indx = Math.floor(Math.random() * 3);
    console.log('./assets/' + files[indx]);
    var imageBuffer = fs.readFileSync('./assets/'+files[indx]);
    var base64Image = imageBuffer.toString('base64');
    return base64Image;
}

module.exports = { findUser, findWinner, getPromptImage};