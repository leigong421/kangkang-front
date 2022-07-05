import axios from "axios";
const instance = axios.create({
  baseURL: "",
  timeout: 3000,
});
// 拦截器
instance.interceptors.request.use(
  function(config) {
    // console.log("正在发送请求哦..."); // 添加loading效果
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);

    config.data = JSON.stringify(config.data);

    config.headers = {
      "Content-Type": "application/json",
    };
    if (config.method === "get") {
      const paramsLength = config.params&&Object.keys(config.params).length; //有参数了再加上时间戳
      if (paramsLength) {
        config.params = {
          timeStamp: Date.now(),
          ...config.params,
        };
      }
    }

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    if (response.status === 200) {
      return response.data;
    }
  },
  function(error) {
    console.error(error);
    return Promise.reject(error);
  }
);
export default instance;
