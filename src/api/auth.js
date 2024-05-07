import axios from 'axios'

export const login = async (data)=>{
    return await axios.post('http://localhost:3000/api/auth/login',data)
}
export const logout = async ()=>{
    return await axios.post('http://localhost:3000/api/auth/logout')
}

 

    
