<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
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
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
      type: DataTypes.TEXT,
=======
      type: DataType.TEXT,
>>>>>>> database setup
      allowNull: false
    }
  });

  return Image;
};
