import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

function Home() {
  return (
    <>
     <Main/> 
     <Row rowId='1' title='Up Coming' len='0'/>
     <Row rowId='2' title='Popular' len='10'/>
     <Row rowId='3' title='Trending' len='20'/>
     <Row rowId='4' title='Top Rated' len='30'/>
     <Row rowId='5' title='Horror' len='40'/>
    </>
  )
} 

export default Home
