import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import DarkImg from '../assets/dark.png';
import LightImg from '../assets/light.png';

export const Newsapp = () => {
  const [search,setSearch]=useState("india");
  const [newsData,setNewsData]=useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = import.meta.env.VITE_API_KEY;
console.log(import.meta.env.VITE_API_KEY);
console.log("Loaded API Key:", API_KEY); 

  const getData= async() =>{
      const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData= await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
  }
  
   useEffect(()=>{
    getData();
   },[])
   
  const handleInput = (e) =>{
      console.log(e.target.value);
      setSearch(e.target.value);
  }

  const userInput = (event) =>{
    setSearch(event.target.value)
  }

   const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return (
        <div className={isDarkMode ? 'dark' : 'light'}>
          <nav className={isDarkMode ? 'x' : 'y'}>
            <div>
              <h1>Trending News</h1>
            </div>
            <ul>
               <a>All News</a>
               <a>Trending</a>
            </ul>
            <div className='searchBar'>
              <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
              <button className='io' onClick={getData}>Search</button>
            </div>
            <button className="toggleBtn" onClick={toggleTheme}>
              {isDarkMode ? <img src={DarkImg} alt="photu" className='btn-img'/> : <img src={LightImg} alt="photu" className='btn-img'/>}
             </button>
          </nav>
          <div>
            <p className='head'>Stay Update with Trending News</p>
          </div>
          <div className={isDarkMode? 'value1':'value2'}>
             <button  onClick={userInput} value="sports">Sports</button>
             <button  onClick={userInput} value="politics">Politics</button>
             <button  onClick={userInput} value="enterntainment">Enterntainment</button>
             <button  onClick={userInput} value="Medical">Medical</button>
             <button  onClick={userInput} value="fitness">Fitness</button>
          </div>
          <div>
          {
            newsData?<Card data={newsData}/>:null
          }
          </div>
        </div>
  );
};
