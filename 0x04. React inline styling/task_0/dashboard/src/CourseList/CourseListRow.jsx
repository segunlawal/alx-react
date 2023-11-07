import React from 'react';
import PropTypes from 'prop-types';

const rowStyles = {
  backgroundColor: '#f5f5f5ab',
};

const headerStyles = {
  backgroundColor: '#deb5b545',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={rowStyles}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} style={headerStyles}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerStyles}>{textFirstCell}</th>
            <th style={headerStyles}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

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
