import React from 'react'

export const Card = ({data}) => {
  console.log(data);

  const readMore=(url)=>{
    window.open(url);
    console.log(url);
    
  }
  return (
      <div className='cardContainer'>
      {data?.map((currItem,index)=>{
        if(!currItem.urlToImage){
          return null;
        }
        else{ 
        return(
          <div className='card'>
            <img src={currItem.urlToImage}/>
            <div className='content'>
              <a className='title' onClick={()=> window.open(currItem.url)}>{currItem.title}</a>
              <p>{currItem.description}</p>
              <button onClick={()=> window.open(currItem.url)}>Read More</button>
            </div>
          </div>
        )
        }
      })} 
      </div>
  );
};
