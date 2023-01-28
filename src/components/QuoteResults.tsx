import { useEffect, useState } from "react";


interface Quote {
    _id: string;
    content: string;
    author: string;
  }

export const QuoteResults = (props: { userInput: string | undefined; }) => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [pageState, setPageState] = useState("default");
    const [inputData, setInputData] = useState('');


async function getQuotes(){
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query="+props.userInput);
    const quote = await result.json();
    console.log(quote);
    setQuotes(quote.results);
}

useEffect(() => {
    console.log("called");
    getQuotes()
  }, []); 

    // return(
    
    //     <>
    //     <form >
    //     <div>
    //     <input className="result_input" placeholder={props.userInput} type="search" onSubmit={event => {
    //             event.preventDefault();
    //             getQuotes();

    //       } } onChange={(event) =>
    //         {
    //         const userInput = event.target.value;                
    //       }}>
    //     </input>
    //     <button type="submit" className="result_button" onClick={(event) => getQuotes()}>
    //       Search
    //     </button>
    //   </div>
    //   </form>
    //   <div>
    //     {
    //         quotes.map((quote) => (
    //             <div key={quote._id}>
    //                 <p>
    //           "{quote.content}"
    //         </p>
    //         <p>
    //           - {quote.author}
    //         </p>
    //             </div>    
    //         ))
    //     }
    //   </div>
    //         </>
    // );

    return (
        <div>
          {pageState === "search" && <QuoteResults userInput={inputData} />}
          {pageState === "default" &&
          
        <><div>
              <form>
                <div>
              <input className="result_input" placeholder={props.userInput} type="search" onChange={ (event) =>
              setInputData(event.target.value)
              } onKeyDown={event => {
                    if (event.key === 'Enter') {
                      setPageState("search");
                    }
                  }}>
                </input>
                </div>
                <div>
                <button type="submit" className="result_button" onClick={() => setPageState("search")}>
                  Search
                </button>
                </div>
              </form>
              <div>
        {
            quotes.map((quote) => (
                <div key={quote._id}>
                    <p>
              "{quote.content}"
            </p>
            <p>
              - {quote.author}
            </p>
                </div>    
            ))
        }
      </div>
            </div></>}
        </div>
    
      );
}

