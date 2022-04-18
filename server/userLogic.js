// helper functions for handling users/players

const usersarray = [];

const addUser = ({ id, username, roomname }) => {
    // control name stylings
    username = username.trim().toLowerCase();
    roomname = roomname.trim().toLowerCase();

    // prevent identical users from occurring in same room
    const existingUsername = usersarray.find((username) => username.roomname === roomname && username.username === username);

    if(existingUsername) {
        return { error: "This username already exists in this room, so try another!" };
    }

    // if that username doesn't already exist in the roomname...
    const user = { id, username, roomname };

    usersarray.push(user);

    return { user }
}


const removeUser = () => {
    const index = usersarray.findIndex((user) => user.id === id);

    // remove user if found
    if(index !== -1) {
        return usersarray.splice(index, 1)[0];
    }
}


const getUser = (id) => usersarray.find((user) => user.id === id);


module.exports = { addUser, removeUser, getUser }