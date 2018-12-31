import { userExists, insertUser } from '../user/user.controller';

const rootMutationResolver = {

  async createUser(parent, args, { client }, info) {
    const doesEmailExists = await userExists(client, args.email);
    if (doesEmailExists) throw new Error('User already exists.');

    try {
      return insertUser(client, args)
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default rootMutationResolver;
