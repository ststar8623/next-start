<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
module.exports = (db, DataTypes) => {
  const Menu = db.define('menu', {
    id: {
      type: DataTypes.INTEGER,
=======
module.exports = (db, DataType) => {
  const Menu = db.define('menu', {
    id: {
      type: DataType.INTEGER,
>>>>>>> database setup
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
<<<<<<< ff3d972a585961848d9cedb97c787b9313d98eac
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNUll: false
    },
    description: DataTypes.TEXT
=======
      type: DataType.STRING,
      allowNull: false
    },
    price: {
      type: DataType.INTEGER,
      allowNUll: false
    },
    description: DataType.TEXT
>>>>>>> database setup
  });

  return Menu;
};
