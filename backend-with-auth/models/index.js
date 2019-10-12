const { sequelize } = require('./database');

const UserModel = sequelize.import('./user');
const TripModel = sequelize.import('./trip');

const models = {
  User: UserModel,
  Trip: TripModel
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = models;