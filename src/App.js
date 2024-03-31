import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContent from './componenets/CartContent/CartContent';
import Home from './componenets/Home/Home';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path= '/'element={<Home/>} />
      <Route path= '/cart' element={<CartContent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
