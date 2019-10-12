const trip = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    tdest: {
      type: DataTypes.STRING
    },
    tdate: {
      type: DataTypes.INT
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