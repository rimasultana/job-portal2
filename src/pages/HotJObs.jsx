import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJObs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/job")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
          }
        </div>
    );
};

export default HotJObs;