import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Main from './components/Main'

function App() {

  return (
    <div>
      <ChakraProvider>
        <div class="bg"></div>
        
        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>
        <Main />
      </ChakraProvider>
    </div>
  )
}

export default App;


