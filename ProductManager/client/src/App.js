import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import CreateForm from './components/CreateForm';
import Main from './components/Main';
import DetailsPage from './components/DetailsPage';
import UpdatePage from './components/UpdatePage';


function App() {
  return (
    <div>
      <h1>Product Manager</h1>
      <h5><Link to='/'>Main Page</Link></h5>
   

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/product/:id' element={<DetailsPage/>} />
        <Route path='/product/edit/:id' element={<UpdatePage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
