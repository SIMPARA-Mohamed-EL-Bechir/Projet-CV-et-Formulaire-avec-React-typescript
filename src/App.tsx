import './App.css';
import { Formulaire } from './screens/Formulaire';
import { Mon_CV } from './screens/Mon_CV';
import {Routes, Route, NavLink } from'react-router-dom'

function App() {
  return (
    <div className='container mt-20'>
      <header className='mb-5'>
        <nav className='flex justify-end'>
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/'> Accueil </NavLink><br />
          <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive? 'bold' : 'normal'})} to='/formulaire'> Formulaire </NavLink><br />
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Mon_CV/>}/>
        <Route path='/formulaire' element={<Formulaire/>}/>
      </Routes>
    </div>
  );
}

export default App;
