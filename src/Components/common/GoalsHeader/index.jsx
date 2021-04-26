import React from 'react';
import { Header, Notification, Profile } from './styled';
import NotificationSvg from './svg/Notification.svg';
import ProfileSvg from './svg/Profile.svg';

function GoalsHeader({ className, children }) {
  return (
    <Header className={className}>
      {children}
      <Notification src={NotificationSvg} alt="" />
      <Profile src={ProfileSvg} alt="" />
    </Header>
  );
}

export default GoalsHeader;
