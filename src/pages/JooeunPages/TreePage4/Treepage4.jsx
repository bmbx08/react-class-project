import React, { useState } from "react";
import "./TreePage4.style.css";
import remember1 from "../image/remember.png";

const TreePage4 = ({ setPage }) => {
  const initialState = {
    answers: {
      evergreen: ["", "", ""],
      deciduous: ["", "", ""],
    },
    results: {
      evergreen: ["", "", ""],
      deciduous: ["", "", ""],
    },
  };

  const correctAnswers = {
    evergreen: ["대나무", "소나무", "희양목"],
    deciduous: ["버드나무", "느티나무", "자작나무"],
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e, category, index) => {
    const updatedAnswers = { ...state.answers };
    updatedAnswers[category][index] = e.target.value;
    setState({ ...state, answers: updatedAnswers });
  };

  const checkAnswer = (category, index) => {
    const isCorrect =
      state.answers[category][index] === correctAnswers[category][index];
    const updatedResults = { ...state.results };
    updatedResults[category][index] = isCorrect ? "정답" : "오답";
    setState({ ...state, results: updatedResults });
  };

  return (
    <div className="page29_2">
      <div className="content">
        <div>
          <img src={remember1} alt="나무 기억하기" width={150} />
        </div>
        <div>
          <p>
            앞서 기억해 둔 <span style={{ color: "red" }}>나무</span>를 떠올리며
            순서대로 빈칸을 적어보세요.
          </p>
          <table className="problem-img">
            <thead>
              <tr>
                <td className="tree-zone1" colSpan={3}>
                  상록수
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {state.answers.evergreen.map((answer, index) => (
                  <td key={index}>
                    <span>{`①②③`[index]}</span>
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => handleChange(e, "evergreen", index)}
                    />
                    <button onClick={() => checkAnswer("evergreen", index)}>
                      제출
                    </button>
                    <div>{state.results.evergreen[index]}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <table className="problem-img">
            <thead>
              <tr>
                <td className="tree-zone2" colSpan={3}>
                  낙엽수
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {state.answers.deciduous.map((answer, index) => (
                  <td key={index}>
                    <span>{`①②③`[index]}</span>
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => handleChange(e, "deciduous", index)}
                    />
                    <button onClick={() => checkAnswer("deciduous", index)}>
                      제출
                    </button>
                    <div>{state.results.deciduous[index]}</div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <br />
          <br />
          <button onClick={() => setPage("TreePage3")}>이전 페이지</button>
          <button onClick={() => setPage("TreePage5")}>다음 페이지</button>
        </div>
      </div>
    </div>
  );
};

export default TreePage4;
