import React from 'react';
import { styles } from '../assets/dummyStyles';
import Navbar from './Navbar'; // Import Navbar

const Layout = ({ onLogout, user }) => {
  return (
    <div className={styles.layout.root}>
      <Navbar user={user} onLogout={onLogout} />
    </div>
  );
};

export default Layout;