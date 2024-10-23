import axios from 'axios'


export const getRace = async ()=>{
try {
    const user_id = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
    return await axios.get(`http://13.60.72.160:3000/api/tasks/${user_id}`);
} catch (error) {
    throw error;
}    }

export const getUserDataByUsername = async (data) => {
  try {
    return await axios.get(`http://13.60.72.160:3000/api/users/${data.username}`);
    // const response = await axios.get(`http://localhost:3000/api/users/${username}`);
    // return response.data;
  } catch (error) {
    throw error;
  }
};
export const createTask = async (data) => {
  try {
    return await axios.post(`http://13.60.72.160:3000/api/tasks`, data)
  } catch (error) {
    throw error;
  }
}

export const editTask = async (id, data) => {
  try {
    return await axios.patch(`http://13.60.72.160:3000/api/tasks/${id}`, data)
  } catch (error) {
    throw error;
  }
}

export const deleteTask = async (id) => {
  try {
    return await axios.delete(`http://13.60.72.160:3000/api/tasks/${id}`)
  } catch (error) {
    throw error;
  }
}