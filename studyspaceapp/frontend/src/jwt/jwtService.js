import axios from 'axios'
import jwtConfig from './jwtConfig'
import cookie from "cookiejs";

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtConfig }

  // ** For Refreshing Token
  isAlreadyFetchingAccessToken = false

  // ** For Refreshing Token
  subscribers = []

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig }

    // ** Request Interceptor
    axios.interceptors.request.use(
      config => {
        // ** Get token from cookies
        const accessToken = this.getToken()

        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
        }
        return config
      },
      error => Promise.reject(error)
    )

    // ** Add request/response interceptor
    axios.interceptors.response.use(
      response => response,
      error => {
        // ** const { config, response: { status } } = error
        const { config, response } = error
        const originalRequest = config

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true
            this.refreshToken().then(r => {
              this.isAlreadyFetchingAccessToken = false

              // ** Update accessToken in cookies
              this.setToken(r.data.access)
              this.setRefreshToken(r.data.refresh)

              this.onAccessTokenFetched(r.data.access)
            })
          }
          const retryOriginalRequest = new Promise(resolve => {
            this.addSubscriber(accessToken => {
              // ** Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
              resolve(axios(originalRequest))
            })
          })
          return retryOriginalRequest
        }
        return Promise.reject(error)
      }
    )
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken))
  }

  addSubscriber(callback) {
    this.subscribers.push(callback)
  }
  getToken() {
    return cookie.get(this.jwtConfig.storageTokenKeyName);
  }

  setToken(value) {
    cookie.set(this.jwtConfig.storageTokenKeyName, value, 7);
  }

  removeToken() {
    cookie.remove(this.jwtConfig.storageTokenKeyName);
  }

  setRefreshToken(value) {
    cookie.set(this.jwtConfig.storageRefreshTokenKeyName, value, 7);
  }

  getRefreshToken() {
    return cookie.get(this.jwtConfig.storageRefreshTokenKeyName);
  }

  removeRefreshToken() {
    cookie.remove(this.jwtConfig.storageRefreshTokenKeyName);
  }

  logout() {
    this.removeToken()
    this.removeRefreshToken()
  }

  post(path, ...args) {
    return axios.post(this.jwtConfig.url + path, ...args)
  }

  patch(path, ...args) {
    return axios.patch(this.jwtConfig.url + path, ...args)
  }

  get(path, ...args) {
    return axios.get(this.jwtConfig.url + path, ...args)
  }

  put(path, ...args) {
    return axios.put(this.jwtConfig.url + path, ...args)
  }

  refreshToken() {
    return axios.post(this.jwtConfig.refreshEndpoint, {
      refresh: this.getRefreshToken()
    })
  }
}