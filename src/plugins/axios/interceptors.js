const setParams = (config) => {
  const params = config.params || {};

  config.params = Object.assign(params, {
    key: "AIzaSyD_-my3JnQXSGTYnudM2YxezJ5-h_SS2is",
  });

  return config;
};

const returnData = (res) => res.data;

export default (axios) => {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
};
