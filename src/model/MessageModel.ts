import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Message = sequelize.define('eh_user', {
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER, // 0表示已收到
    allowNull: false,
    defaultValue: 0
  }
});

export default Message;
