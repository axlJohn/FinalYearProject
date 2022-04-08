// helper functions for handling users

const users = [];

// logic for creating new user
const addUser = ({ id, name, room }) => {
    // if user enters name as 'My Name' it becomes 'myname'
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // prevents identical users
    // if same user is trying to sign up to same room it is forbidden
    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser) {
        return { error: "This username is currently in use in this room!" };
    }

    // creating new user if no issues are present
    const user = { id, name, room };

    users.push(user);

    return { user }
}

// logic for removing users
const removeUser = () => {
    // if user id is equal to the one we find
    const index = users.findIndex((user) => user.id === id);

    // remove that user from our array at the top
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// logic for getting our user
// if the user id is equal to the id the user exists and we return it
const getUser = (id) => users.find((user) => user.id === id);

// tell us the users in the room
// works similarly to getUser but applies to all users in a room as opposed to individual id
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

// exporting functions for use in other files (index.js etc)
module.exports = { addUser, removeUser, getUser, getUsersInRoom }