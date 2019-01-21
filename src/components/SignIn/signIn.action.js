const SIGN_IN_USER = 'SIGN_IN_USER';

export const signIn = (email) => {
  return {
    type: SIGN_IN_USER,
    payload: {
      email,
    }
  }
};
