import React, { useEffect, useState } from 'react'
import SearchJob from '../components/SearchJob'

const Home = () => {
  const[selectedCategory,setSelectedCategory] = useState();
  const[jobs,setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {setJobs(data)})
  },[])
  console.log(jobs)

  const [query,setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value);
      console.log(event.target.value)
  }
  return (
   <div>
    <SearchJob query={query} handleInputChange={handleInputChange}/>
   </div>
  )
}

export default Home