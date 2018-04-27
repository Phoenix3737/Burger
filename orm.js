var connection = require("./connection");


var orm = {
    selectAll: function (tableName) {
        var query = "SELECT * FROM ??";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    insertOne: function (tableName, obj) {
        var query = 'INSERT INTO ? SET ?';
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, obj], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    updateOne: function (tableName, updCol, updVal, idCol, objId) {
        var query = "UPDATE ? SET ? = ?? WHERE ? = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, updCol, updVal, idCol, objId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

module.exports = orm;