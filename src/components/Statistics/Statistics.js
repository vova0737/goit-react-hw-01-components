import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  )
}

const StatsList = ({ items }) => {
  if (items.length === 0) return null
  return <ul className={styles.statList}> {items.map(StatsListItem)}</ul>;
}

const Statistics = ({ items, title }) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <StatsList items={items} />
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;