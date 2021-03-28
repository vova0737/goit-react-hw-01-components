import React from 'react';
import PropTypes from 'prop-types';

import FriendItem from './FriendItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return (
    <ul className={styles.friendList}>
      <h2>My friends</h2>
      {friends.map(({ isOnline, name, avatar, id }) => {
        return (
          <FriendItem
            isOnline={isOnline}
            name={name}
            avatar={avatar}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;