import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { MainRouter } from './router/MainRouter';
import { CartProvider } from './Context';


function App() {
 
  return (
    <>
      <div>
        <CartProvider>
        <MainRouter/>
        </CartProvider>
         
      </div>
      
    </>
  )
}

export default App
