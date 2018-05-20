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
  const pipeline = sessionStorage.getItem('pipeline') || 'undefined';
  let url;
  const { origin, hostname } = window.location;

  if (hostname === 'localhost') {
    url = `http://localhost:8080/oculus/rest/${pipeline}/`;
    return url;
  }
  url = `${origin}/oculus/rest/${pipeline}/`;
  return url;
};

const host = getBaseUrl();

const config = {
  timeout: 4000,
  onSuccess: successfulServiceRequest,
  onError: failedServiceRequest,
};

export {
  config,
  host,
};
