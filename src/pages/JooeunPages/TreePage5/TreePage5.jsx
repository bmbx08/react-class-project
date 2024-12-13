import React, { useState } from "react";
import "./TreePage5.style.css";
import today from "../image/today.png";

const TreePage5 = ({ setPage }) => {
  const initialState = [
    { name: "", type: "", result: "" }, 
    { name: "", type: "", result: "" }, 
    { name: "", type: "", result: "" },
    { name: "", type: "", result: "" },
    { name: "", type: "", result: "" },
    { name: "", type: "", result: "" },
  ];

  const correctAnswers = [
    { name: "버드나무", type: "낙엽수" },
    { name: "소나무", type: "상록수" },
    { name: "느티나무", type: "낙엽수" },
    { name: "희양목", type: "상록수" },
    { name: "자작나무", type: "낙엽수" },
    { name: "대나무", type: "상록수" },
  ];

  const [answers, setAnswers] = useState(initialState);

  const handleChange = (e, index, field) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index][field] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const checkAnswer = (index) => {
    const isNameCorrect = answers[index].name === correctAnswers[index].name;
    const isTypeCorrect = answers[index].type === correctAnswers[index].type;
    const updatedAnswers = [...answers];
    updatedAnswers[index].result =
      isNameCorrect && isTypeCorrect ? "정답" : "오답";
    setAnswers(updatedAnswers);
  };

  return (
    <div className="page31_2">
      <div className="content">
        <div>
          <img src={today} alt="오늘의 그림 기억하기" width={200} />
        </div>
        <div>
          <p>
            앞서 기억해 둔 <span style={{ color: "red" }}>나무</span>의
            초성입니다. 초성 밑에 각각의 나무 이름을 모두 적고, 상록수와
            낙엽수에 맞는 보기를 선택하세요.
          </p>
          <table className="problem-img">
            <thead>
              <tr>
                <td>ㅂㄷㄴㅁ</td>
                <td>ㅅㄴㅁ</td>
                <td>ㄴㅌㄴㅁ</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {answers.slice(0, 3).map((answer, index) => (
                  <td key={index}>
                    <input
                      type="text"
                      value={answer.name}
                      onChange={(e) => handleChange(e, index, "name")}
                      placeholder="나무 이름"
                    />
                    <br />
                    <label>
                      <input
                        type="radio"
                        value="상록수"
                        checked={answer.type === "상록수"}
                        onChange={(e) => handleChange(e, index, "type")}
                      />
                      상록수
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="낙엽수"
                        checked={answer.type === "낙엽수"}
                        onChange={(e) => handleChange(e, index, "type")}
                      />
                      낙엽수
                    </label>
                    <br />
                    <button onClick={() => checkAnswer(index)}>제출</button>
                    <div>{answer.result}</div>
                  </td>
                ))}
              </tr>
            </tbody>
            <thead>
              <tr>
                <td>ㅎㅇㅁ</td>
                <td>ㅈㅈㄴㅁ</td>
                <td>ㄷㄴㅁ</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {answers.slice(3).map((answer, index) => (
                  <td key={index + 3}>
                    <input
                      type="text"
                      value={answer.name}
                      onChange={(e) => handleChange(e, index + 3, "name")}
                      placeholder="나무 이름"
                    />
                    <br />
                    <label>
                      <input
                        type="radio"
                        value="상록수"
                        checked={answer.type === "상록수"}
                        onChange={(e) => handleChange(e, index + 3, "type")}
                      />
                      상록수
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="낙엽수"
                        checked={answer.type === "낙엽수"}
                        onChange={(e) => handleChange(e, index + 3, "type")}
                      />
                      낙엽수
                    </label>
                    <br />
                    <button onClick={() => checkAnswer(index + 3)}>제출</button>
                    <div>{answer.result}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <br />
          <br />
          <button onClick={() => setPage("TreePage4")}>이전 페이지</button>
          <button onClick={() => setPage("StuffPage1")}>다음 페이지</button>
        </div>
      </div>
    </div>
  );
};

export default TreePage5;
