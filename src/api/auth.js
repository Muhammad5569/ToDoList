import axios from 'axios'

export const login = async (data)=>{
    return await axios.post('http://13.60.72.160:3000/api/auth/login',data)
}
export const logout = async ()=>{
    return await axios.post('http://13.60.72.160:3000/api/auth/logout')
}
// export const user = async (data)=>{
//     return axios.get('http://localhost:3000/api/users/:username')
// }
 

    
