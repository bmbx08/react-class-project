import React, { useState } from "react";
import "../StuffPage1/Quiz.css";
import check from "../StuffPage1/check.png";
import plant from "../StuffPage1/plant.png";

const correctAnswers = {
  "1-1": "연필",
  "1-2": "수건",
  "1-3": "공책",
  "1-4": "칫솔",
  "2-1": "세숫대야",
  "2-2": "볼펜",
  "2-3": "비누",
  "2-4": "지우개",
};

const InputField = ({ label, name, onChange, result, value }) => (
  <td className="input_table_31">
    {label}
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
      newResults[key] = userAnswers[key] === correctAnswers[key];
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
      <div className="table_container">
        <table className="main_table">
          <tbody>
            <tr>
              <td className="item_table">연◯</td>
              <td className="item_table">수◯</td>
              <td className="item_table">공◯</td>
              <td className="item_table">◯솔</td>
            </tr>
            <tr>
              <td className="item_table">세◯대◯</td>
              <td className="item_table">볼◯</td>
              <td className="item_table">◯누</td>
              <td className="item_table">지◯개</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="margin">
        <InputField
          label="①"
          name="1-1"
          value={userAnswers["1-1"]}
          onChange={InputChange}
          result={results && results["1-1"]}
        />
        <InputField
          label="②"
          name="1-2"
          value={userAnswers["1-2"]}
          onChange={InputChange}
          result={results && results["1-2"]}
        />
        <InputField
          label="③"
          name="1-3"
          value={userAnswers["1-3"]}
          onChange={InputChange}
          result={results && results["1-3"]}
        />
        <InputField
          label="④"
          name="1-4"
          value={userAnswers["1-4"]}
          onChange={InputChange}
          result={results && results["1-4"]}
        />
        <div>
          <InputField
            label="⑤"
            name="2-1"
            value={userAnswers["2-1"]}
            onChange={InputChange}
            result={results && results["2-1"]}
          />
          <InputField
            label="⑥"
            name="2-2"
            value={userAnswers["2-2"]}
            onChange={InputChange}
            result={results && results["2-2"]}
          />
          <InputField
            label="⑦"
            name="2-3"
            value={userAnswers["2-3"]}
            onChange={InputChange}
            result={results && results["2-3"]}
          />
          <InputField
            label="⑧"
            name="2-4"
            value={userAnswers["2-4"]}
            onChange={InputChange}
            result={results && results["2-4"]}
          />
        </div>
      </div>
      <div className="underline">
        <img src={check} alt="check Icon" className="img" />
        <span className="red_text">물건들</span>을 기억해주세요.
      </div>
      <div className="margin">
        <button onClick={Submit} className="button">
          채점
        </button>
        <button onClick={Reset} className="button">
          다시 풀기
        </button>
      </div>
    </div>
  );
};

export default Quiz;
