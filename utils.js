export function findUser(users, username) {
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username) {
            return users[i];
        }
    }
    return null;
}

export function findWinner(users) {
    let max = {
        name : null,
        points : 0
    };
    
    for (let i = 0; i < users.length; i++) {
        
    }
    return null;
}