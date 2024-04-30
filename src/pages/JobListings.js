import React, { useState, useContext } from "react";
import classes from "./JobListings.module.css";
import JobContext from "../store/job-context";

const JobListings = () => {
  const jobCtx = useContext(JobContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowDetails = (job) => {
    setSelectedJob(selectedJob === job ? null : job);
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
              <button
                className={classes["details-button"]}
                onClick={() => handleShowDetails(job)}
              >
                {selectedJob === job ? "Hide Details" : "Show Details"}
              </button>
              {selectedJob === job && (
                <div
                  className={classes["description-container"]}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
