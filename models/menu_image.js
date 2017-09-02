module.exports = (db, DataTypes) => {
  const Menu_Image = db.define('menu_image', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  });

  return Menu_Image;
};
