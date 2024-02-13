const {DataTypes} = require("sequelize")
const sequelize = require("../utils/connectToDB")
const User = require("./User")
const Quote = require("./Quote")

const Like = sequelize.define("Like", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        },
    },
    quote_id:{
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Quote',
            key: 'id'
        }
    },
    like: {
        type : DataTypes.BOOLEAN,
        defaultValue : false
    },
    dislike:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
{
    freezeTableName: true
}

);

module.exports = Like
