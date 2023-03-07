export interface jwtconfig {
  payload:{
    username:string,
    role:string
  },
  expiration:string,
  issuer:string,
  audience:string
}