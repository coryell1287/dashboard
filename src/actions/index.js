import { get } from 'api';
import { config } from 'api/serviceConfig';

export const asyncGet = () => (dispatch) => {

  const options = {
    ...config,
    url: '',
  };
  dispatch(get(options.url, config));
};
