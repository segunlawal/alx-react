import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
            key="no-course"
          />
        ) : (
          listCourses.map(({ id, name, credit }) => (
            <CourseListRow
              key={id}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  CourseList: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid gray',
    fontSize: '1.2rem',
    marginBottom: '15em',
  },

  th: {
    borderBottom: '1px solid gray',
  },

  tr: {
    'nth-child(2)': {
      textAlign: 'left',
    },
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
