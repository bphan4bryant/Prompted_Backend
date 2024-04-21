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

function pickRandomImage(files) {
    let idx = Math.floor(Math.random() * 3);
    return files[idx];
}

module.exports = { findUser, findWinner, pickRandomImage};