import React, { useEffect, useState } from 'react'
import SearchJob from '../components/SearchJob'
import Card from '../components/Card';
import Jobs from '../components/Jobs';

const Home = () => {
  const[selectedCategory,setSelectedCategory] = useState();
  const[jobs,setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {setJobs(data)})
  },[])

  //handle input change
  const [query,setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value);
      console.log(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  console.log(filteredItems)

  //radio-filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //main function
  const filteredData = (jobs,selected,query) => {
    let filteredJobs = jobs;

    //filtering input items if there is query
    if(query){
      filteredJobs = filteredItems;
    }

    //category filtering'
    if(selected){
      filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate}) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs)
    }
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs,selectedCategory,query);

  return (
   <div>
    <SearchJob query={query} handleInputChange={handleInputChange}/>

    {/* main content */}
    <section className='bg-zinc-100 grid grid-cols-4 justify-center gap-4 p-10'>
     <div className='bg-white'>left</div>
     <div className='bg-white col-span-2'> <Jobs result={result}/></div>
     <div className='bg-white'>right</div>
    </section>
   </div>
  )
}

export default Home