

import axios from 'axios'
    export const getRace = async ()=>{
        return await axios.get('http://localhost:3000/api/tasks')
    }

 

    
