import { get } from 'api';
import { config } from 'api/serviceConfig';

export const asyncGet = () => (dispatch) => {

  const options = {
    ...config,
    url: '',
  };
  dispatch(get(options.url, config));
};


class AsyncGet {
  static getSomething() {
    return (dispatch) => {
      const options = {
        url: '',
      }
      dispatch(get(options));
    };
  }
}