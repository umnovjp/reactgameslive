import React from 'react';
import IssueItem from '../components/IssueItem';
console.log(issues);
// Here we accept an array of issues as a prop
const IssueList = ({ issues }) => {
  // We create a list of rendered IssueItems by using the map method on `issues`
  const renderedList = issues.map((issue) => {
    return <IssueItem key={issue.id} issue={issue} />;
   
  });
  console.log(issues);
  // Here we return our array of IssueItems wrapped inside a parent div
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default IssueList;
