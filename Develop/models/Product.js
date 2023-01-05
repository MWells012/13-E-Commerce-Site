// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,

    },
    product_name: {
      allowNull: false,
      type: DataTypes.STRING,

    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL,

    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,

    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,

    }
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
