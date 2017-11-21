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
  let baseUrl;
  const { location: { hostname, origin } } = window;
  if (hostname !== 'localhost') {
    baseUrl = `${origin}/rest/`;
    return baseUrl;
  }
  baseUrl = 'http://localhost:4000/rest/';
  return baseUrl;
};

const host = getBaseUrl();

const config = {
  timeout: 4000,
  onSuccess: successfulServiceRequest,
  onError: failedServiceRequest,
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'en_US',
    'Content-Type': 'application/json',
  },
};

export {
  config,
  host,
};
