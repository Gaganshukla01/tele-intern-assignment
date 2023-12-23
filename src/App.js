import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './component/LoginPage/LoginPage';
import Terms from './component/Terms/Terms';
import HomePage from './component/HomePage/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/terms'element={<Terms/>}/>
      </Routes>
    </div>
  );
}

export default App;
