import JwtService from './jwtService'

export default function useJwt(jwtOverrideConfig) {
  return new JwtService(jwtOverrideConfig)
}