const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Type = sequelize.define('type', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  typeName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: false // 因为你手动定义了 createdAt 和 updatedAt 字段，所以需要设置 timestamps 为 false
});

module.exports = Type;
