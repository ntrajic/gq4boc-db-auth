const trip = (sequelize, DataTypes) => {
  const Trip = sequelize.define('trip', {
    tdest: {
      type: DataTypes.STRING
    },
    tdate: {
      type: DataTypes.INTEGER
    },
    tlead: {
      type: DataTypes.STRING
    },
    treport: {
      type: DataTypes.STRING
    }
  });

  Trip.associate = models => {
    Trip.belongsTo(models.User);
  };

  return Trip;
}

module.exports = trip;