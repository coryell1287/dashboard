import axios from 'axios';

const successfulServiceRequest = service => ({
  type: service.type,
  payload: {
    data: service.data,
  },
});

const failedServiceRequest = err => ({
  type: 'FAILED_SERVICE_REQUEST',
  err: err.message,
});

const getBaseUrl = () => {
  const { origin, hostname, protocol } = window.location;
  let url;

  if (hostname === 'localhost') {
    url = 'http://localhost:8080/api/';
    return url;
  }

  url = !origin
    ? `${protocol}//${hostname}/api/`
    : `${origin}/api/`;
  return url;
};

const host = getBaseUrl();

axios.defaults.baseURL = host;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(request => request);
