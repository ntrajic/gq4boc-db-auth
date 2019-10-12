const { sequelize } = require('./models/database');
const models = require('./models');




const createData = async() => {
  await models.User.create({
    name: 'Rimka Laman',
    username: 'rimka',
    password: 'test1',
    trips: [{
      tdest: 'LynnCanyon',
      tdate: '20190324',
      treport: '2019-03-24-Lynn-Canyon-Report.pdf'
    }]
  }, {
    include: [models.Trip]
  });

  await models.User.create({
    name: 'Su-Jane Liang',
    username: 'su-jane',
    password: 'test2',
    trips: [{
      tdest: 'Buntzen',
      tdate: '20190331',
      treport: '31-03-2019-Buntzen-Lake-Report.pdf'
    }]
  }, {
    include: [models.Trip]
  });

  await models.User.create({
    name: 'David Carter',
    username: 'david',
    password: 'test3',
    trips: [{
      tdest: 'Galiano',
      tdate: '20190825',
      treport: '20190825GalianoTripReport.pdf'
    }, {
      tdest: 'LakeAnn',
      tdate: '20190825',
      treport: '2019100LakeAnnTripReport.pdf'
    }]
  }, {
    include: [models.Trip]
  });
}

// flag force: true is important!!!
sequelize.sync({ force: true }).then(async() => {
  try {
    await createData();
    process.exit();
  } catch(error) {
    console.error(error);
  }
});