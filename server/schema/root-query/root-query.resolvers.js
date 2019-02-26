import { authenticateUser, getUserProfile } from '../user/user.controller';

const rootQueryResolvers = {
  async authentication(_, args, { client }) {
    try {
      return authenticateUser(client, args);
    } catch (error) {
      throw new Error(error);
    }
  },

  async user(_, args, { client, req }) {
    try {
      return getUserProfile(client, args);
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default rootQueryResolvers;
