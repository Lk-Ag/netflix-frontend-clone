import React from 'react'
import data from '../Data'

const Main = () => {
const movie = data[Math.floor(Math.random() * data.length)]
const truncateString = (str,num)=>{
  if(str.length > num){
    return str.slice(0,num) + '...';
  }else{
    return str;
  }
};
// const options = {
//   method: 'GET',
//   url: '',
//   params: {
//     start_year: '1970',
//     end_year: '2020',
//     min_imdb: '6',
//     max_imdb: '7.8',
//     genre: 'action',
//     language: 'english',
//     type: 'movie',
//     sort: 'latest',
//     page: '1'
//   },
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': ''
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={movie.imageurl} alt={movie.title}></img>
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released: {movie.released}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie.synopsis,150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
