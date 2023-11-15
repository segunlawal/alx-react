import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <tr className={isHeader ? css(styles.headerStyles) : css(styles.rowStyles)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(isChecked && styles.rowChecked)}>
            <input
              type="checkbox"
              value={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#deb5b545',
  },

  rowStyles: {
    backgroundColor: '#f5f5f5ab',
  },

  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
