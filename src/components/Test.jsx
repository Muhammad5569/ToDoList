import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDataByUsername } from '../api/task';

const TaskPage = () => {
  // const { username } = useParams();
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const req = {username: username}
      
  //     try {
  //       const userData = await getUserDataByUsername(req)
        
  //       setUserData(userData);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData();
  // }, [username]);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }
  
  return (
    <div>
      <h1>Tasks Page for</h1>
      
    </div>
  );
};

export default TaskPage;
