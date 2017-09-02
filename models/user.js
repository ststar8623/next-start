module.exports = (db, DataTypes) => {
  const User = db.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    google_id: {
      type: DataTypes.STRING,
      unique: true
    },
    facebook_id: {
      type: DataTypes.STRING,
      unique: true
    },
    twitter_id: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isEmail: true
    },
    facebook_profile_image: DataTypes.TEXT,
    google_profile_image: DataTypes.TEXT,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });
  return User;
};
