const clickable = require('../models/Clickables')
const Stats = require('../models/Stats')
const { AuthenticationError } = require('apollo-server-express');
const { User }  = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('messages')
                    .populate('stats');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('messages')
                .populate('stats');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('messages')
                .populate('stats');
        },
        messages: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.find(params).sort({ createdAt: -1 });
        },
        message: async (parent, { _id }) => {
            return User.findOne({ _id });
        },
        Stats: async (parent, {_id}) => {
            const statData = await Stats.findOne({_id})
                .populate('savHid')
                .populate('savePerClick')
                .populate('saveUnit')
                .populate('upgradeLvl')


            return statData;
        },
        clickable: async() => {
            return clickable.find()
                .populate('tran')
                .populate('comp')
                .populate('Chip')
                .populate('CPU')
                .populate('clickmodifier')
                .populate('cost')
                .populate('mod')
                .populate('curUpgrade')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addMessage: async (parent, args, context) => {
            if (context.user) {
                const message = await Message.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { messages: message._id } },
                    { new: true }
                );

                return message;
            }

            throw new AuthenticationError('You need to be logged in!');
        }

    }
};

module.exports = resolvers;