import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App (){
  return (
    
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <div className="titulo">
            <br />
          <h2>¡Bienvenidos al sitio oficial de The Three Of Quarantine!</h2>
          <br />
          <p>
            <i>
                "... rock crudo y de alma góspel: interpretaciones minimalistas que dejan entreoír un lejano traqueteo, crujen en estrépito y se silencian..."
            </i>
          </p>
          <br />
          <hr />
          </div>
            {/* <ItemListContainer/> */}
            {/* <ItemDetailContainer/> */}
            <Routes>
              <Route path='/' element = {<ItemDetailContainer/>} />
              {/* <Route path='/category/:idCategory' element = {<ItemListContainer/>} />
              <Route path='/item/:idItem' element = {<ItemDetailContainer/>} /> */}
            </Routes>
        </div>
        </BrowserRouter>
  )
}

export default App;