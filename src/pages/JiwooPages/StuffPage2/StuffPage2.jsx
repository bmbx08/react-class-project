import React, { useState } from "react";
import "./Quiz.css"
import check from "./check.png";
import plant from "./plant.png";

const correctAnswers = {
  기준1: "필기구",
  기준2: "목욕용품",
  "1-1": ["공책", "연필", "볼펜", "지우개"],
  "1-2": ["공책", "연필", "볼펜", "지우개"],
  "1-3": ["공책", "연필", "볼펜", "지우개"],
  "1-4": ["공책", "연필", "볼펜", "지우개"],
  "2-1": ["칫솔", "비누", "세숫대야", "수건"],
  "2-2": ["칫솔", "비누", "세숫대야", "수건"],
  "2-3": ["칫솔", "비누", "세숫대야", "수건"],
  "2-4": ["칫솔", "비누", "세숫대야", "수건"],
};

const InputField = ({ num, name, onChange, result, value }) => (
  <td className="input_table">
    {num}
    <input
      className="input"
      type="text"
      value={value || ""}
      onChange={(e) => onChange(e, name)}
    />
    {result !== null && (
      <div
        style={{
          color: result ? "green" : "red",
          fontSize: "12px",
        }}
      >
        {result ? "정답" : "오답"}
      </div>
    )}
  </td>
);

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState(null);

  const InputChange = (e, key) => {
    setUserAnswers({ ...userAnswers, [key]: e.target.value });
  };

  const Submit = () => {
    const newResults = {};
    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = userAnswers[key];
      newResults[key] = correctAnswers[key].includes(userAnswer);
    });
    setResults(newResults); 
  };
  
  const Reset = () => {
    setUserAnswers({});
    setResults(null);
  };

  return (
    <div className="quiz_container">
      <div className="green_box">
        <img src={plant} alt="plant Icon" className="img" />
        <span className="box_text">물건들 기억하기</span>
      </div>
      <div className="margin">
        <p>
          다음의 <span className="red_text">물건들</span>을 사용하는 용도에 따라
          나누어 적어보세요.
        </p>
      </div>
      <div className="margin">
        <table className="main_table">
          <tbody>
            <tr>
              <td className="title_table">분류기준(용도)</td>
              <td colSpan="4" className="title_table">
                물건
              </td>
            </tr>
            <tr>
              <InputField
                num="1."
                name="기준1"
                value={userAnswers["기준1"]}
                onChange={InputChange}
                result={results && results["기준1"]}
              />
              <InputField
                num="①"
                name="1-1"
                value={userAnswers["1-1"]}
                onChange={InputChange}
                result={results && results["1-1"]}
              />
              <InputField
                num="②"
                name="1-2"
                value={userAnswers["1-2"]}
                onChange={InputChange}
                result={results && results["1-2"]}
              />
              <InputField
                num="③"
                name="1-3"
                value={userAnswers["1-3"]}
                onChange={InputChange}
                result={results && results["1-3"]}
              />
              <InputField
                num="④"
                name="1-4"
                value={userAnswers["1-4"]}
                onChange={InputChange}
                result={results && results["1-4"]}
              />
            </tr>
            <tr>
              <InputField
                num="2."
                name="기준2"
                value={userAnswers["기준2"]}
                onChange={InputChange}
                result={results && results["기준2"]}
              />
              <InputField
                num="①"
                name="2-1"
                value={userAnswers["2-1"]}
                onChange={InputChange}
                result={results && results["2-1"]}
              />
              <InputField
                num="②"
                name="2-2"
                value={userAnswers["2-2"]}
                onChange={InputChange}
                result={results && results["2-2"]}
              />
              <InputField
                num="③"
                name="2-3"
                value={userAnswers["2-3"]}
                onChange={InputChange}
                result={results && results["2-3"]}
              />
              <InputField
                num="④"
                name="2-4"
                value={userAnswers["2-4"]}
                onChange={InputChange}
                result={results && results["2-4"]}
              />
            </tr>
          </tbody>
        </table>
      </div>
      <div className="underline">
        <img src={check} alt="check Icon" className="img" />
        <span className="red_text">물건들</span>을 기억해주세요.
      </div>
      <div className="margin">
        <button onClick={Submit} className="button">
          채점
        </button>
        <button onClick={Reset} className="button_reset">
          다시 풀기
        </button>
      </div>
    </div>
  );
};

export default Quiz;
