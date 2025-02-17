const User = require('./models/user');

const resolvers = {
  Query: {
    users: async () => {
     const res= await User.findAll()
     console.log(res);
     return res;
    },
    user: async (_, { id }) => await User.findByPk(id),
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = await User.create({ name, email });
      return user;
    },
  },
};

module.exports = resolvers;