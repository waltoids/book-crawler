module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3,25]
              }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,18]
            }
        }
    });
    return Users
};