import axios from 'axios';

const httpRequest = (method, options) => async (dispatch) => {
  try {
    dispatch({ type: 'START_FETCHING', fetching: true });
    const { data } = method === 'get'
      ? await axios[method](options.url)
      : await axios[method](options.url, options.body);
    return await dispatch(options.onSuccess(data));
  } catch (err) {
    return await dispatch(options.onError(err));
  } finally {
    dispatch({ type: 'STOP_FETCHING', fetching: false });
  }
};

export const post = options => httpRequest('post', options);
export const get = options => httpRequest('get', options);
export const put = options => httpRequest('put', options);
export const patch = options => httpRequest('patch', options);
export const remove = options => httpRequest('delete', options);
