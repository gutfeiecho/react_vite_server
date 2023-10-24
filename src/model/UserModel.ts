import { DataTypes } from 'sequelize';
import sequelize from '../database';

const User = sequelize.define('eh_user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default User;
