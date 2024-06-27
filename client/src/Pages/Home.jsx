import React, { useEffect, useState } from 'react'
import SearchJob from '../components/SearchJob'
import Card from '../components/Card';
import Jobs from '../components/Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
  const[selectedCategory,setSelectedCategory] = useState();
  const[jobs,setJobs] = useState([]);
  const[isLoading,setLoading] = useState(false);
  const[currentPage,setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setLoading(true)
    fetch("jobs.json").then(res => res.json()).then(data => {setJobs(data)})
    setLoading(false);
  },[])

  //pagination function--calculating index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex,endIndex}; 
  }

  //function for next page
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length/itemsPerPage)){
      setCurrentPage(currentPage + 1);
    }
  }

  //function for previous page
  const prevPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  //handle input change
  const [query,setQuery] = useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value);
      console.log(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  //radio-filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //---main function----
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
    const {startIndex,endIndex} = calculatePageRange();    //slice data based on current page for pagination
    filteredJobs = filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs,selectedCategory,query);

  

  return (
   <div>
    <SearchJob query={query} handleInputChange={handleInputChange}/>

    {/* main content */}
    <section className='bg-zinc-100 grid grid-cols-4 justify-center gap-4 p-10'>

      {/* left-side */}
     <div className='bg-white p-4'><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>

     <div className='bg-white col-span-2'> 
      {
        isLoading ? (<p>Loading....</p>) : result.length > 0 ? (<Jobs result={result}/>) : 
        <div>
          <h3 className="font-semibold text-center text-xl px-4 pt-2">No Jobs Found</h3>
          <img src="./notfound.png" alt="" />
        </div>
       }

      {/*  pagination */}
      {result.length > 0 ? (
        <div>
          <button onClick={prevPage} >Previous</button>
          <span>  Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length/itemsPerPage)}>Next</button>
        </div>):""
      }

     </div>

     {/* right-side */}
     <div className='bg-white p-4'>right</div>
    </section>
   </div>
  )
}

export default Home