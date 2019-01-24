import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
  isAuth:false,
  user:'user',
  age:20
}
export function auth(state=initState, action) {
  console.log(state,action)
  // console.log({...state, ...action.payload})
  switch(action.type) {
    case USER_DATA:
      return {...state, ...action.payload}
    case LOGIN:
      return {...state, isAuth:true}
    case LOGOUT:
      return {...state, isAuth:false}
    default:
      return state
  }
}

export function getUserData() { 
  return dispatch=>{
    axios.get('/data')
    .then(res=>{
      if (res.status===200) {
        dispatch(userData(res.data[0]))
      }
    })
  }
}

function userData(data) {
  return {type:USER_DATA,payload:data}
}

export function login() {
  return {type:LOGIN}
}

export function logout() {
  return {type:LOGOUT}
}