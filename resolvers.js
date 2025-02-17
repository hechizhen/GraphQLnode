const User = require('./models/user');
const Type = require('./models/type');

const resolvers = {
  Query: {
    users: async () =>{
      const res=await User.findAll()
      console.log(res,111111)
      return res
    },
    user: async (_, { id }) => await User.findByPk(id),
    types: async () =>  {
    const res=  await Type.findAll()
    console.log(res,1111112222)
    return res
    },
    type: async (_, { id }) => {
const res=await Type.findByPk(id)
console.log(res,111111)
     return res
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = await User.create({ name, email });
      return user;
    },
    createType: async (_, { typeName }) => {
      console.log(typeName,111111)
      const user = await Type.create({ typeName });
      console.log(user,111111)
      return user;
    },
    updataType: async (_, { id,typeName }) => {
      console.log(id,typeName,111111)
      const user = await Type.findByPk(id);
      if (!user) {
        throw new Error('User not found111');
      }
      await user.update({ typeName });
      return user;
    },
  },
};

module.exports = resolvers;