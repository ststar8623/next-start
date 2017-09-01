<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
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
<<<<<<< 7ae91533bd8de43f075641f1fefe86dbbbf81deb
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
