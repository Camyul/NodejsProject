const usersList = [{
    username: 'Simo',
    password: 'simosimo',
    id: 1,
}, {
    username: 's',
    password: 's',
    id: 2,
}];

const users = {
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
                return reject('User not found!');
            }

            return resolve(user);
        });
    },
};

module.exports = {
    users,
};
