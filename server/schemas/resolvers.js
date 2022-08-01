const { AuthenticationError } = require('apollo-server-express');
const { User, Bouquet, Occasion, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find().populate('orders');
      return users;
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    bouquets: async () => {
      return Bouquet.find();
    },
    bouquet: async (parent, args) => {
      return Bouquet.findOne({ _id: args.id });
    },

    occasions: async () => {
      return Occasion.find();
    },
    occasion: async (parent, args) => {
      return Occasion.findOne({ _id: args.id });
    },

  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
