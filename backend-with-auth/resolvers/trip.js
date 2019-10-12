const resolvers = {
  Query: {
    trips: (parent, args, { models }) => {
      // SELECT * FROM trips;
      return models.trip.findAll();
    },
    trip: (parent, { id }, { models }) => {
      // SELECT * FROM trips WHERE id = `id`;
      return models.Trip.findByPk(id);
    },
    // imgs: (parent, {id}, {tphotos} { models }) => {
    //   // SELECT trip.tphotos FROM trips WHERE id = `id`;
    //   return models.Trip.tphotos.findAllPhotos();
    // },
    // img: (parent, { id }, {tphotos[pid]} { models }) => {
    //   // SELECT trip.tphotos[pid] FROM trips WHERE id = `id`;
    //   return models.Trip.tphotos.findPhotoByTP(id, tid);
    // }
  },
  Mutation: {
    createTrip: (parent, { tdest, tdate, tlead, treport }, { models, me }) => {
      if (!me) {
        throw new Error('Not authenticated');
      }

      const trip = {
        tdest,
        tdate,
        tlead,
        treport
      };
      
      return models.Trip.create(trip);
    },
    removeTrip: (parent, { id }, { models }) => {
      return models.Trip.destory({
        where: {
          id
        }
      });
    }
  },
  Trip: {
    owner: (parent, args, { models }) => {
      console.log(parent);
      // SELECT * FROM users WHERE id = `parent.userId`;
      return models.User.findByPk(parent.userId);
    }
  }
};

module.exports = resolvers;