import { useState } from 'react';
import LoginPage from './pages/KichanPages/LoginPage/LoginPage';
import './App.css';
import ClockProblem1 from './pages/KichanPages/ClockProblem1/ClockProblem1';


function App() {
  const [page,setPage] = useState("login");

  return (
    <div>
      {page==="login"&&<LoginPage setPage={setPage}/>}
      {page==="ClockProblem1"&&<ClockProblem1 setPage={setPage}/>}
    </div>
  );
}

export default App;
