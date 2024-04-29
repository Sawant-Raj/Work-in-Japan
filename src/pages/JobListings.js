import React, { useState, useContext } from "react";
import classes from "./JobListings.module.css";
import JobContext from "../store/job-context";
import JobDetails from "./JobDetails"; // Import the JobDetails component

const JobListings = () => {
  const jobCtx = useContext(JobContext); // Access jobData from the context
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowDetails = (job) => {
    setSelectedJob(job);
  };

  const filteredJobListings = jobCtx.jobData.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={classes["job-listings-container"]}>
      <h2>Job Listings</h2>
      <div className={classes["input-container"]}>
        <input
          type="text"
          placeholder="Search job title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <ul className={classes["job-listings"]}>
        {filteredJobListings.map((job) => (
          <li key={job.slug}>
            <div className={classes["job-item"]}>
              <h3>{job.title}</h3>
              <p>{job.company_name}</p>
              <p className={classes.location}>{job.location}</p>
              <button onClick={() => handleShowDetails(job)}>
                Show Details
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedJob && <JobDetails job={selectedJob} />}
    </div>
  );
};

export default JobListings;
