import React, { useState } from 'react';
import { getUserById } from "../api/moodleService";
import '../styles/UserList.css';


const UserList = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('1');

  const fetchUserData = async () => {
      setLoading(true);
      const data = await getUserById(userId);
      setUserData(data);
      setLoading(false);
  };

  const handleUserIdChange = (e) => {
      setUserId(e.target.value);
  };

  return (
      <div className="user-list">
          <div>
              <label htmlFor="userId">User ID:</label>
              <input
                  type="text"
                  id="userId"
                  value={userId}
                  onChange={handleUserIdChange}
                  disabled={loading}
              />
          </div>
          <button onClick={fetchUserData} disabled={loading}>
              {loading ? 'Loading...' : 'Get User Data'}
          </button>
          {userData && (
              <div>
                  <h2>User Information</h2>
                  <p>ID: {userData.id}</p>
                  <p>Email: {userData.email}</p>
                  {/* Add more user information here */}
              </div>
          )}
      </div>  
  );
};

export default UserList;