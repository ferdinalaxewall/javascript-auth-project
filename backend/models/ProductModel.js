import { Sequelize } from "sequelize";
import db from "../config/Database";
import Users from "./UserModel";

const { DataTypes } = Sequelize;

const Products = db.define('products', {
    uuid : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.UUIDV4,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true,
            len : [5, 100]
        }
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true,
        }
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true,
        }
    },
}, {
    freezeTableName : true
});

Users.hasMany(Products);
Products.belongsTo(Users, {foreignKey : 'userId'});

export default Products