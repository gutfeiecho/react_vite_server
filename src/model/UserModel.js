import { DataTypes } from 'sequelize';
import sequelize from '../database/index.js';
import { encryptPassword } from '../utils/index.js';

const User = sequelize.define('eh_user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    set(value) {
      this.setDataValue('password', encryptPassword(value));
    }
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
