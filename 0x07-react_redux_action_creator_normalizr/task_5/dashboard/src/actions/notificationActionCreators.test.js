import {
  NotificationTypeFilters,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from './notificationActionTypes';

import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';

describe('tests for notification actions', () => {
  it('markAsRead action creator should return the correct action', () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('setNotificationFilter action creator should return the correct action for DEFAULT filter', () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    });
  });
});
