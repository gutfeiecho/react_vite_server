import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Blog = sequelize.define('eh_user', {
  title: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING, // 0表示草稿箱 1表示已发布 2表示已删除
    allowNull: false
  },
  is_private: {
    type: DataTypes.CHAR, // 0表示公开 1表示私人
    allowNull: false,
    defaultValue: 1
  },
  is_deleted: {
    type: DataTypes.CHAR, // 0表示未删除 1表示已删除
    allowNull: false,
    defaultValue: 0
  }
});

export default Blog;
