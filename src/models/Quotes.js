const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")

    const quotes = sequelize.define("quotes", {
        quote: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        comment:{
            type: DataTypes.STRING(200),
            allowNull: true
        },
        like_count:{
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        dislike_count:{
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        deletedAt:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
    },)
    quotes.associate = (models) => {
        quotes.belongsTo(User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });
    };
    module.exports = quotes
