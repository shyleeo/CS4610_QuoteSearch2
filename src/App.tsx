import { useEffect, useState } from 'react'
import './App.css'
import { QuoteDefault } from './components/QuoteDefault';
import { QuoteResults } from './components/QuoteResults';
import logo from './quotation.png'; 


export function App() {
  const [pageState, setPageState] = useState("default");


  return (
    <div>
      {pageState === "search" && <QuoteResults userInput={''}/>}
      {pageState === "default" && <QuoteDefault/>}
    </div>

  )
}

export default App
















































// import { useEffect, useState } from 'react'
// import './App.css'
// import logo from './quotation.png'; 
// import {QuoteResults} from './components/QuoteResults';
// import {QuoteDefault} from './components/QuoteDefault';

// interface Quote {
//   _id: string;
//   content: string;
//   author: string;
// }

// interface userSearch {
//   search: string;
// }

// export function App() {
//   const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
//   const [userInput, setUserInput] = useState<userSearch | null>(null);

//   const [pageState, setPageState] = useState("default");


//   async function loadRandomQuote() {
//     const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
//     const quote = await result.json();
//     setRandomQuote(quote);
//     // console.log(quote);
//   } 
  
//   useEffect(() => {
//     loadRandomQuote()
//   }, []); 

//   return (
//     <div>
//       {/* {pageState === "default" && <QuoteDefault />} */}
//       {pageState === "search" && <QuoteResults userInput={undefined} />}
//       {pageState === "default" &&
      
//     <><div className="default_body">
//           <div>
//             <img src={logo} />
//           </div>
//           <h2>Quote Search</h2>
//           <div>
//             <input type="text" placeholder="Grace Hopper" onKeyDown={event => {
//               // event.preventDefault();
//                 if (event.key === 'Enter') {
//                   setPageState("search");
//                   //this.form.submit();
//                   // <QuoteResults userInput = {event.target.value}/>
//                 }
//               }}>
//             </input>
//           </div>
//           <div>
//             <button id='main_button' onClick={() => setPageState("search")}>
//               Search
//             </button>
//           </div>
//           <div>
//             <p>
//               "{randomQuote?.content}"
//             </p>
//             <p>
//               - {randomQuote?.author}
//             </p>
//           </div>
//         </div></>}
//     </div>

//   )
// }

// export default App
