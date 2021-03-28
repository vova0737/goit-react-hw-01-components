import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css';

const FriendItem = ({ id, isOnline, name, avatar }) => {
    return (
        <li key={id} className={styles.item}>
            {isOnline ? (
                <span className={styles.online}></span>
            ) : (
                    <span className={styles.offline}></span>
                )}
            <img className={styles.avatar} src={avatar} alt={name} />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default FriendItem;