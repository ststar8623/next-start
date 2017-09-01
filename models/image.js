<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
module.exports = (db, DataTypes) => {
  const Image = db.define('image', {
    id: {
      type: DataTypes.INTEGER,
=======
module.exports = (db, DataType) => {
  const Image = db.define('image', {
    id: {
      type: DataType.INTEGER,
>>>>>>> database setup
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    url: {
<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
      type: DataTypes.TEXT,
=======
      type: DataType.TEXT,
>>>>>>> database setup
      allowNull: false
    }
  });

  return Image;
};
