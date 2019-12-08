import axios from 'axios'

 const getEngineer = (username) => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:5000/myhire/by' + username)
  }
}
export default getEngineer
