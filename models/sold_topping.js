module.exports = (db, DataTypes) => {
  const Sold_Topping = db.define('sold_topping', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return Sold_Topping;
};
