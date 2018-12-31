import { signInUser } from '../user/user.controller';

const rootQueryResolvers = {
  async signIn(parent, args, { client }, info) {
    try {
      return signInUser(client, args);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default rootQueryResolvers;
