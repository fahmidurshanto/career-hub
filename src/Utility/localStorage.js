// this function will find the already stored job id in local  storage  and return it
// if no job is found, then it will return an empty array
const getStoredJobApplication = () => {
  // this variable will find if any job id exists  or not in the local storage.
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

// this function will save the job id in local storage using localStorage.setItem() .
const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exits = storedJobApplications.find((jobId) => jobId === id);
  if (!exits) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoredJobApplication, saveJobApplication };
