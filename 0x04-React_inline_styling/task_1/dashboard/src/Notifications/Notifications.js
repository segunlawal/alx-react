import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>

        {displayDrawer && (
          <div className={css(styles.Notifications)}>
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
            {listNotifications.length > 0 && (
              <p>Here is the list of notifications</p>
            )}
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                    markAsRead={this.markAsRead}
                    id={id}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dotted red',
    padding: '10px',
    position: 'absolute',
    top: '2.5em',
    right: '10px',
  },
  menuItem: {
    textAlign: 'right',
  },
});

export default Notifications;
