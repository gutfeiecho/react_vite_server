import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Blog = sequelize.define(
  'eh_blog',
  {
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
    }
  },
  {
    // A paranoid table is one that, when told to delete a record,it will not truly delete it.Instead, a special column called deletedAt will have its value set to the timestamp of that deletion request.
    paranoid: true
  }
);

export default Blog;
