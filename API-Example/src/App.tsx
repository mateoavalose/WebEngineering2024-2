import { ShowCharacter } from './components/HarryPotter/ShowCharacter'
import { ShowQuote } from './components/Quotes/ShowQuote'
import { RouterR } from './components/Menu/RouterR'

function App() {

  return (
    <>
      <h1>Menu done with Router library</h1>
      <RouterR/>

      <div style={{ height: '100px' }} /> {/* Blank space */} <hr /> {/* Horizontal line */} <div style={{ height: '100px' }} /> {/* Blank space */}

      <h1>Breaking Bad API</h1>
      <ShowQuote/>

      <div style={{ height: '100px' }} /> <hr /> <div style={{ height: '100px' }} />
      
      <h1>Harry Potter API</h1>
      <ShowCharacter/>
    </>
  )
}

export default App