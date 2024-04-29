import React from "react";

const JobDetails = (props) => {
  const { job } = props;

  return (
    <div>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p>{job.company_name}</p>
      <p>{job.location}</p>
      <div>
        <p>Description:</p>
        <div>{parseDescription(job.description)}</div>
      </div>
    </div>
  );
};

const parseDescription = (description) => {
  // Parse HTML tags using DOMParser
  const parser = new DOMParser();
  const parsedHTML = parser.parseFromString(description, "text/html");

  // Extract and return text content
  return parsedHTML.body.textContent;
};

export default JobDetails;
