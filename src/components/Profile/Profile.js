import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <h2>Profile</h2>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  name: 'User Name',
  tag: 'no tag',
  location: 'Unknown location',
  avatar:
    'https://vignette.wikia.nocookie.net/winnipeg-west-marches/images/4/4f/Noavatar.jpg',
  stats: PropTypes.arrayOf({
    followers: 0,
    views: 0,
    likes: 0,
  }),
};

export default Profile;
