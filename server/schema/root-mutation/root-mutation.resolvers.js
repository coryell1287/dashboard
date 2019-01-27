import { userExists, insertUser, signOutUser } from '../user/user.controller';

const rootMutationResolver = {

  async signUp(_, args, { client }) {
    const doesEmailExists = await userExists(client, args.email);
    if (doesEmailExists) throw new Error('User already exists.');

    try {
      return insertUser(client, args)
    } catch (error) {
      throw new Error(error);
    }
  },
  async signOut(_, args, { client }) {
    try {
      return signOutUser(client, args);
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default rootMutationResolver;
