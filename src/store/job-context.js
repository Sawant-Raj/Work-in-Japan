import React, { createContext, useState, useEffect } from "react";

const JobContext = createContext();

export const JobContextProvider = (props) => {
  // State to store job data
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Fetch job data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.arbeitnow.com/api/job-board-api"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobData(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    jobData: jobData,
  };

  return (
    <JobContext.Provider value={contextValue}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContext;
