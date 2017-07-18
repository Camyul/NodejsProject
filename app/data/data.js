// const ItemsData = require('./items.data');
const UsersData = require('./users.data');

const init = (db) => {
    return Promise.resolve({
        // items: new ItemsData(db),
        users: new UsersData(db),
    });
};

module.exports = { init };

/* const users = {
    findById(id) {
        console.log(`findById - ${id}`);
        id = +id;
        const user =
            usersList.find((u) => u.id === id);
        return new Promise((resolve, reject) => {
            if (!user) {
                return reject('User not found!');
            }

            return resolve(user);
        });
    },
    findByUsername(username) {
        console.log(`findByUsername - ${username}`);
        const usernameToLower = username.toLowerCase();
        const user =
            usersList.find((u) => u.username.toLowerCase() === usernameToLower);
        return new Promise((resolve, reject) => {
            if (!user) {
                return reject(null);
            }
            return resolve(user);
        });
    },
}; */
