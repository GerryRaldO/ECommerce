// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// TODO: Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// TODO: set up fields and rules for Product model
Product.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
