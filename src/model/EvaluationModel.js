import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Evaluation = sequelize.define(
  'eh_evaluation',
  {
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
    }
  },
  {
    paranoid: true
  }
);

export default Evaluation;
