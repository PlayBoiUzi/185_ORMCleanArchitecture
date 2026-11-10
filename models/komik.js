module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define("Komik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'komik',    // Menentukan nama tabel agar tetap 'komik'
    timestamps: false     // Mengabaikan createdAt & updatedAt jika tabel manual
  });

  return Komik;
};