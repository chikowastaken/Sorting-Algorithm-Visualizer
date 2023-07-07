import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Main from './components/Main'

function App() {

  return (
    <div>
      <ChakraProvider>
        <div className="bg"></div>
        
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
        <Main />
      </ChakraProvider>
    </div>
  )
}

export default App;


