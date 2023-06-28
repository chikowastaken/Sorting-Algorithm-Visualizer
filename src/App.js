import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './components/Main'
import { createContext } from 'react';

export const MyContext = createContext("");


function App() {
  const [array, setArray] = useState([8, 2, 5, 3, 4, 7, 6, 1])

  return (
    <div>
      <MyContext.Provider value={{ array, setArray }}>
        <ChakraProvider>
          <Main />
        </ChakraProvider>
      </MyContext.Provider>

    </div>
  )
}

export default App;


