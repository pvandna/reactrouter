import { useState } from 'react'                //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './vandnaproject/ComponentsCard'
import Header from './ReactRouter/Header/Header'
import About from './ReactRouter/About/About'
import Home from './ReactRouter/Home/Home'
import Footer from './ReactRouter/Footer/Footer'
import Contact from './ReactRouter/Contact/Contact'
import { Outlet } from 'react-router-dom'

//-------------------------------------------------1st project:inc dec value by usestate-------------------------------------------------------------------------------------------

// function App() {
  
// const [counter,setcounter]=  useState(0)
 
  
//   const addvalue = ()=>{
//     if(counter<=0 || counter<20)
//     {
//       setcounter(counter+1)
//                 // setcounter(prevcounter=>prevcounter+1)
//                 // setcounter(prevcounter=>prevcounter+1)
//                 // setcounter(prevcounter=>prevcounter+1)
//                 // setcounter(prevcounter=>prevcounter+1)
    
//     }
//    }

//   const removevalue = ()=>{
//     if(counter>0 && counter<=20)
//       {setcounter(counter-1)}
    
//   }

//   return (
//     <>
//        <h1 >choose your age betwwen 0 to 20</h1>
//        <br></br>
//        <h1>counter value :{counter}</h1>
//        <button onClick={addvalue} >add value</button>
//        <br/>
//        <button onClick={removevalue}>remove value</button>
//        <h1>counter value :{counter}</h1>

    
    
//     </>
    
//   )}




//--------------------------------------------2nd project: props uses-----------------------------------------------------------------------------------------------


// function App() {

// return(
//   <>
//      <h1 className='bg-green-400 text-purple-200 p-4 rounded-xl mb-4'>telwind test</h1>
//      < Card  vandna="vandna protfolio1" btntext="btn1" per="peragraph1"/>
//      <Card  vandna="vandna protofolio2"  per="peragraph2"/>

  
//   </>
// );


// }



//-------------------------------------------------------project3:changing bg colors----------------------------------------------------------------------------------
                         //--comment root from index.css for better result--
         

// function App() {
//   const [color,setcolor]=  useState("olive")

//   return(
//     <>
//     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

//           <button onClick={()=>setcolor("red")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' 
//           style={{backgroundColor:"red"}}
//           >red</button>

//          <button onClick={()=>setcolor("yellow")}
//          className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' 
//           style={{backgroundColor:"yellow"}}
//           >yellow</button>

//          <button onClick={()=>setcolor("green")}
//          className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' 
//           style={{backgroundColor:"green"}}
//           >green</button>

//           <button onClick={()=>setcolor("blue")}
//           className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' 
//           style={{backgroundColor:"blue"}}
//           >blue</button>
//        </div >
//       </div>
//     </div>
//    </>
//   );
//   }



 // ----------------------------------------------------------project4--------------------------------------------------------------------------------------
       // react router


       function App() {

        return(
          <>
             <Header/>
             <Outlet/>
             <Footer/>
          
          </>
        );
        
        
        }
        

































export default App;
