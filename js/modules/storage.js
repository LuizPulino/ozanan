const Storage = {
    create: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    read: function(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    update: function(key, value) {
        if (localStorage.getItem(key) !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },

    delete: function(key) {
        localStorage.removeItem(key);
    }
};

export default Storage;