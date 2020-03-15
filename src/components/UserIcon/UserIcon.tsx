import React from 'react';

// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components
import { IconButton } from '@material-ui/core';

const UserIcon = (toggleEnterNameModal: any): JSX.Element => {
  const handleToggleEnterNameModal = () => toggleEnterNameModal();

  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      onClick={handleToggleEnterNameModal}
      color="inherit"
    >
      <AccountCircle fontSize="large" />
    </IconButton>
  );
};

export default UserIcon;
