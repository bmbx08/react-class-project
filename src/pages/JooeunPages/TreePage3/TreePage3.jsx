import React, { useState } from "react";
import "./TreePage3.style.css";
import choose from "../image/choose.png";
import winter from "../image/winter.png";
import spring from "../image/spring.png";
import summer from "../image/summer.png";
import fall from "../image/fall.png";

const TreePage3 = ({ setPage }) => {
  const initialState = {
    winter: { value: "", result: "" },
    spring: { value: "", result: "" },
    summer: { value: "", result: "" },
    fall: { value: "", result: "" },
  };

  const [answers, setAnswers] = useState(initialState);

  const correctAnswers = {
    winter: "겨울",
    spring: "봄",
    summer: "여름",
    fall: "가을",
  };

  const handleChange = (e, key) => {
    setAnswers({
      ...answers,
      [key]: { ...answers[key], value: e.target.value },
    });
  };

  const checkAnswer = (key) => {
    const isCorrect = answers[key].value === correctAnswers[key];
    setAnswers({
      ...answers,
      [key]: { ...answers[key], result: isCorrect ? "정답" : "오답" },
    });
  };
  return (
    <div className="page28_2">
      <div className="content">
        <div>
          <img
            src={choose}
            alt="계절별 나무 고르기"
            width={150}
            style={{ marginLeft: "-10px" }}
          />
        </div>

        <div>
          <p>
            다음은 계절별 나무 그림입니다. 각 나무그림 밑에 계절 이름을
            적어보세요.{" "}
          </p>
          <table className="problem-img">
            <tr>
              <td>
                <img src={winter} alt="겨울" />
              </td>
              <td>
                <img src={spring} alt="봄" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={answers.winter.value}
                  onChange={(e) => handleChange(e, "winter")}
                />
                <button onClick={() => checkAnswer("winter")}>제출</button>
                <div>{answers.winter.result}</div>
              </td>
              <td>
                <input
                  type="text"
                  value={answers.spring.value}
                  onChange={(e) => handleChange(e, "spring")}
                />
                <button onClick={() => checkAnswer("spring")}>제출</button>
                <div>{answers.spring.result}</div>
              </td>
            </tr>
            <tr>
              <td>
                <img src={summer} alt="여름" />
              </td>
              <td>
                <img src={fall} alt="가을" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  value={answers.summer.value}
                  onChange={(e) => handleChange(e, "summer")}
                />
                <button onClick={() => checkAnswer("summer")}>제출</button>
                <div>{answers.summer.result}</div>
              </td>
              <td>
                <input
                  type="text"
                  value={answers.fall.value}
                  onChange={(e) => handleChange(e, "fall")}
                />
                <button onClick={() => checkAnswer("fall")}>제출</button>
                <div>{answers.fall.result}</div>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <br /><br />
          <button onClick={() => setPage("TreePage2")}>이전 페이지</button>
          <button onClick={() => setPage("TreePage4")}>다음 페이지</button>
        </div>
      </div>
    </div>
  );
};

export default TreePage3;
