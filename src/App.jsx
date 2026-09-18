import React from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


const App = () => {
   const course = 'CIT-U Bachelor of Science in Information Technology: Industry Elective'
   const part1 = 'Fundamentals of React'
   const exercise1 = 10
   const part2 = 'Using props to pass data'
   const exercise2 = 7
   const part3 = 'State of component'
   const exercise3 = 14

   const name = 'Ronnel P. Creencia'
   const courseCode = 'CSIT340'
   const section = 'G7'

   return(
     <div>
       <h1>{course}</h1>
       <p>{part1} {exercise1}</p>
        <p>{part2} {exercise2}</p>
         <p>{part3} {exercise3}</p>
         <p>Number of exercices {exercise1 + exercise2 + exercise3}</p>

       <footer>
        <h1>{name} - {courseCode} - {section}</h1>
       
       </footer>

     </div>
   )

}

export default App
