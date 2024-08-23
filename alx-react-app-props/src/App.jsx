import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import './app.css';
<source />

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
