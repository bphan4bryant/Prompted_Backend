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

function emitToAll(io, sids, message) {
    for (let i=0; i<sids.length; i++) {
        io.to(sids[i]).emit(message);
    }
}