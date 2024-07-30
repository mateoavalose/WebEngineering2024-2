
import { ShowCharacter } from './components/ShowCharacter'
import { ShowQuote } from './components/ShowQuote'

function App() {

  return (
    <>
      <h1>Breaking Bad API</h1>
      <ShowQuote />

      <div style={{ height: '100px' }} /> {/* Blank space */}
      <hr /> {/* Horizontal line */}
      <div style={{ height: '100px' }} /> {/* Blank space */}
      
      <ShowCharacter />
    </>
  )
}

export default App