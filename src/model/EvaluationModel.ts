import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Evaluation = sequelize.define('eh_user', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.CHAR, // 0表示未删除 1表示已删除
    allowNull: false,
    defaultValue: 0
  }
});

export default Evaluation;
