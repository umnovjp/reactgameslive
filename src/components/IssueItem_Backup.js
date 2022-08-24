import React from 'react';

// Issue item accepts a single issue as a prop
// This component is solely responsible for displaying the specific information for a given issue
const IssueItem = ({ issue }) => {
  console.log(issue);
  return (
    <div className="item">
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <a
          className="header"
          href={issue.html_url}
          target="_blank"
          rel="noopener noreferrer"
          // rel="noreferrer"
        >    {issue.title}
        {issue.id}
        </a>
    
        <div className="description">{issue.description}
        place
        </div>
      </div>
    </div>
  );
};

export default IssueItem;
