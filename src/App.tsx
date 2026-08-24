import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home_page } from './page/Home_page'
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
