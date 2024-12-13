import { useState } from "react";
import LoginPage from "./pages/KichanPages/LoginPage/LoginPage";
import "./App.css";
import ClockPage1 from "./pages/KichanPages/ClockPage1/ClockPage1";
import ClockPage2 from "./pages/KichanPages/ClockPage2/ClockPage2";
import TreePage1 from "./pages/JooeunPages/TreePage1/TreePage1";
import TreePage2 from "./pages/JooeunPages/TreePage2/TreePage2";
import TreePage3 from "./pages/JooeunPages/TreePage3/TreePage3";
import TreePage4 from "./pages/JooeunPages/TreePage4/Treepage4";
import TreePage5 from "./pages/JooeunPages/TreePage5/TreePage5";
import Quiz1 from "./pages/JiwooPages/StuffPage1/StuffPage1";
import Quiz2 from "./pages/JiwooPages/StuffPage2/StuffPage2";
import Quiz3 from "./pages/JiwooPages/StuffPage3/StuffPage3";
import DiaryPage from "./pages/JiwooPages/DiaryPage/DiaryPage";


function App() {
  const [page, setPage] = useState("LoginPage");

  return (
    <div>
      {page === "LoginPage" && <LoginPage setPage={setPage} />}
      {page === "ClockPage1" && <ClockPage1 setPage={setPage} />}
      {page === "ClockPage2" && <ClockPage2 setPage={setPage} />}
      {page === "TreePage1" && <TreePage1 setPage={setPage} />}
      {page === "TreePage2" && <TreePage2 setPage={setPage} />}
      {page === "TreePage3" && <TreePage3 setPage={setPage} />}
      {page === "TreePage4" && <TreePage4 setPage={setPage} />}
      {page === "TreePage5" && <TreePage5 setPage={setPage} />}
      {page === "StuffPage1" && <Quiz1 setPage={setPage} />}
      {page === "StuffPage2" && <Quiz2 setPage={setPage} />}
      {page === "StuffPage3" && <Quiz3 setPage={setPage} />}
      {page === "DiaryPage" && <DiaryPage setPage={setPage} />}
    </div>
  );
}

export default App;
