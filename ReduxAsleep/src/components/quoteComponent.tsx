import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote,resetQuote } from "../store/quoteSlice";
import { AppDispatch,RootState} from "../store/store";
 
 
export const QuoteComponent = () => {
    const quote=useSelector((state:RootState)=>state.quote.quote);
    const author=useSelector((state:RootState)=>state.quote.author);
    const status=useSelector((state:RootState)=>state.quote.status);
    const dispatch: AppDispatch = useDispatch();
 
    useEffect(()=>{
        dispatch(fetchQuote());
    },[dispatch]);
   
 
  return (
    <>
      <header className="App-header">
        <h1>
            Breaking bad quotes
        </h1>
        {status==="loading" ? (
            <p>Loading...</p>):(
                <div>
                    <p>{quote}</p>
                    <p><strong>{author}</strong></p>
                    <button onClick={()=>dispatch(fetchQuote())}>New Quote</button>
                    <button onClick={()=>dispatch(resetQuote())}>Reset</button>
                </div>
                )}
      </header>
    </>
  )
}