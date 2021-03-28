import React from 'react';
import PropTypes from 'prop-types';

import styles from './Transactions.module.css';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={styles.tableRow}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
  );
};

const TransactionTable = ({ transactions }) => {
  return (
    <>
      <h2>Transactions</h2>
      <table className={styles.transactionTable}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionTable;
