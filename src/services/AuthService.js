import axios from 'axios'
import Login from '../Login'
const getToken = async ()=>{
    const token = await axios.get('http://localhost:3000/api/users/login')
}
console.log(Login.values)
// const authToken = 
// document.cookie= 'authToken = ${}; Secure; SameSite=Stirct'

// fetch('http://localhost:3000/api/users/login',{

// })
//     .then((res) => console.log(res))
//     .catch((e)=> console.log(e))