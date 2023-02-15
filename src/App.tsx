
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ColorGenerator from './components/ColorGenerator';
import Header from './components/Header'
import RandomColor from './components/RandomColor'
import { RootState } from './redux/store';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<RandomColor />} />
        <Route path='/color' element={<ColorGenerator />} />
      </Routes>
    </div>
  )
}

export default App
