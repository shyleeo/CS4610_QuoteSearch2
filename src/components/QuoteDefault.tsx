import { useEffect, useState } from 'react';
import logo from '../quotation.png'; 
import { QuoteResults } from './QuoteResults';

interface Quote {
    _id: string;
    content: string;
    author: string;
  }

export function QuoteDefault() {
    const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
    const [pageState, setPageState] = useState("default");
    const [inputData, setInputData] = useState('');

    async function loadRandomQuote() {
      const result = await fetch("https://usu-quotes-mimic.vercel.app/api/random");
      const quote = await result.json();
      setRandomQuote(quote);
      console.log(quote);
    }

    useEffect(() => {
        loadRandomQuote()
      }, []); 
      
  return (
    <div>
      {pageState === "search" && <QuoteResults userInput={inputData} />}
      {pageState === "default" &&
      
    <><div className="default_body">
          <div>
            <img src={logo} />
          </div>
          <form>
            <div>
          <input type="text" placeholder="Grace Hopper" onChange={ (event) =>
          setInputData(event.target.value)
          } onKeyDown={event => {
                if (event.key === 'Enter') {
                  setPageState("search");
                }
              }}>
            </input>
            </div>
            <div>
            <button id='main_button' onClick={() => setPageState("search")}>
              Search
            </button>
            </div>
          </form>
          <div>
            <p>
              "{randomQuote?.content}"
            </p>
            <p>
              - {randomQuote?.author}
            </p>
          </div>
        </div></>}
    </div>

  )
}
