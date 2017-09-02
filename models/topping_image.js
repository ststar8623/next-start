module.exports = (db, DataTypes) => {
  const Topping_Image = db.define('topping_image', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return Topping_Image;
};
