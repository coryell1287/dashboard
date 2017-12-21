import axios from 'axios';
import { store } from 'store/configureStore';
import { host } from 'api/serviceConfig';

const { dispatch } = store;

const httpRequest = async (method, url, config) => {
  try {
    dispatch({ type: 'START_FETCHING', fetching: true });
    const { data } = method === 'get'
      ? await axios[method](url, config)
      : await axios[method](url, config.body, config);
    return await dispatch(config.onSuccess(data));
  } catch (err) {
    return await dispatch(config.onError(err));
  } finally {
    dispatch({ type: 'STOP_FETCHING', fetching: false });
  }
};

export const get = (basePath, config) =>
  httpRequest('get', `${host}${basePath}`, config);

export const post = (basePath, body, config) =>
  httpRequest('post', `${host}${basePath}`, body, config);

