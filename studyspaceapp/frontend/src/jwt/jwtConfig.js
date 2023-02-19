const BACKEND_URL = 'http://127.0.0.1:8000/api';
export default {
    refreshEndpoint: `${BACKEND_URL}/account/token/refresh/`,
    url: BACKEND_URL,
    // ** This will be prefixed in authorization header with token
    // ? e.g. Authorization: Bearer <token>
    tokenType: 'Bearer',
    // ** Value of this property will be used as key to store JWT token in storage
    storageTokenKeyName: 'accessToken',
    storageRefreshTokenKeyName: 'refreshToken'
  }