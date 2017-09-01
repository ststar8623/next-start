module.exports = (db, DataType) => {
  const Image = db.define('image', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataType.TEXT,
      allowNull: false
    }
  });

  return Image;
};
