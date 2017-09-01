module.exports = (db, DataType) => {
  const Menu = db.define('menu', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    price: {
      type: DataType.INTEGER,
      allowNUll: false
    },
    description: DataType.TEXT
  });

  return Menu;
};
