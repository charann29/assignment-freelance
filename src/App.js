import React from 'react';
import Header from  './components/Header.js'
import './App.css'
import CustomCard from './components/CustomCard.js';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Image from './Image.js';




function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home></Home>} path='/'>

        </Route>
        <Route element={<Image></Image>} path='/output'></Route>
      </Routes>
    </HashRouter>

  );
}

export default App;


function Home(){
  return(
  <div  >
        <Header></Header>
        <div style={{marginTop:'40px'}}></div>
        {/* <CustomCard data={sampleData[0]}></CustomCard> */}

        <div className='fl'>
          {
            sampleData.map((da,ind)=><CustomCard headerName={headerData[ind]} data={sampleData[ind]}></CustomCard>)
          }
          </div>

    </div>
  )
}

const headerData=['HW1 - Home Page','HW2 - Database Basic SQL Queries','HW3 - Basic Queries SQL',
'HW4 - Project Ideas & Complex SQL','HW5 - Relational Algebra & calculus','HW6 - E-R Model','HW7 - EER Model','HW8 - File Structures','Project Report','Project Download']
const sampleData=[
  [{
    webpage:'code',

  }],
  [
    {
      code:'',
      output:''
    },
    {
      code:'',
      output:''
    }
  ],
  [
    {
      code:'',
      output:''
    }
  ],
  [
    {
      code:'',
      output:''
    }
  ],
  [
    {
      code:'',
      output:''
    },
    {
      code:'',
      output:''
    }
  ],
  [
    {
      code:''
    }
  ],
  [

    {
      code:'',
      output:''
    }
  ],
  [

    {
      code:'',
      output:''
    }
  ],
  [
    {
      code:''
    }
  ],[
    {
      code:''
    }
  ]
]