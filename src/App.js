import { useState } from 'react';
import LoginPage from './pages/KichanPages/LoginPage/LoginPage';
import './App.css';


function App() {
  const [page,setPage] = useState("login");

  return (
    <div>
      {page==="login"&&<LoginPage/>}
    </div>
  );
}

export default App;
