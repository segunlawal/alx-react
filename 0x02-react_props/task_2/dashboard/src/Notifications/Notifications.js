import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        type="button"
        aria-label="Close"
        onClick={() => {
          console.log('Close button has been clicked');
        }}
        style={{
          color: '#3a3a3a',
          background: 'none',
          border: 'none',
          position: 'absolute',
          right: '10px',
          top: '10px',
          cursor: 'pointer',
          transform: 'scale(0.5)',
        }}
      >
        <img src={closeIcon} alt="close" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
};

export default Notifications;
