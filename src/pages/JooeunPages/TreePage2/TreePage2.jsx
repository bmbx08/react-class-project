import React, { useState } from "react";
import "./TreePage2.style.css";
import remember1 from "../image/remember.png";
import remember2 from "../image/footer.png";
import daenamu from "../image/tree.jpg";
import sonamu from "../image/sonamu.png";
import hwei from "../image/hwei.jpg";
import budnamu from "../image/budnamu.jpg";
import zelkova from "../image/zelkova.jpg";
import birch from "../image/birch.jpg";

const TreePage2 = ({ setPage }) => {
  const initialState = {
    daenamu: { value: "", result: "" },
    sonamu: { value: "", result: "" },
    hwei: { value: "", result: "" },
    budnamu: { value: "", result: "" },
    zelkova: { value: "", result: "" },
    birch: { value: "", result: "" },
  };

  const [answers, setAnswers] = useState(initialState);

  const correctAnswers = {
    daenamu: "대나무",
    sonamu: "소나무",
    hwei: "희양목",
    budnamu: "버드나무",
    zelkova: "느티나무",
    birch: "자작나무",
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
    <div className="page-27">
      <div className="content">
        <div>
          <img src={remember1} alt="나무 기억하기" width={150} />
        </div>
        <div>
          <p>
            나무는 잎의 수명에 따라 상록수와 낙엽수로 나뉩니다. 상록수는 계절에
            상관없이 늘 잎이 푸른 나무, 낙엽수는 잎의 수명이 짧아 1년 이내에
            잎이 떨어지는 나무입니다. 앞서 기억해 둔{" "}
            <span style={{ color: "red" }}>나무</span>를 상록수와 낙엽수로
            나누고, 이름을 적어보세요.
          </p>
          <table className="problem-img">
            <tbody>
              <tr>
                <td className="tree-zone1" colSpan={3}>
                  상록수
                </td>
              </tr>
              <tr className="tree-table-row">
                <td>
                  <img src={daenamu} alt="대나무" width={150} height={100} />
                </td>
                <td>
                  <img src={sonamu} alt="소나무" width={150} height={100} />
                </td>
                <td>
                  <img src={hwei} alt="희양목" width={150} height={100} />
                </td>
              </tr>
              <tr className="tree-table-row">
                <td>
                  <input
                    type="text"
                    value={answers.daenamu.value}
                    onChange={(e) => handleChange(e, "daenamu")}
                  />
                  <button onClick={() => checkAnswer("daenamu")}>제출</button>
                  <div>{answers.daenamu.result}</div>
                </td>
                <td>
                  <input
                    type="text"
                    value={answers.sonamu.value}
                    onChange={(e) => handleChange(e, "sonamu")}
                  />
                  <button onClick={() => checkAnswer("sonamu")}>제출</button>
                  <div>{answers.sonamu.result}</div>
                </td>
                <td>
                  <input
                    type="text"
                    value={answers.hwei.value}
                    onChange={(e) => handleChange(e, "hwei")}
                  />
                  <button onClick={() => checkAnswer("hwei")}>제출</button>
                  <div>{answers.hwei.result}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="arrow-text">
            <span className="arrow">→</span>
            <span>나무 이름이 모두 3글자</span>
          </div>
          <br />
          <br />
          <br />
          <table className="problem-img">
            <tbody>
              <tr>
                <td className="tree-zone2" colSpan={3}>
                  낙엽수
                </td>
              </tr>
              <tr>
                <td>
                  <img src={budnamu} alt="버드나무" width={150} height={100} />
                </td>
                <td>
                  <img src={zelkova} alt="느티나무" width={150} height={100} />
                </td>
                <td>
                  <img src={birch} alt="자작나무" width={150} height={100} />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    value={answers.budnamu.value}
                    onChange={(e) => handleChange(e, "budnamu")}
                  />
                  <button onClick={() => checkAnswer("budnamu")}>제출</button>
                  <div>{answers.budnamu.result}</div>
                </td>
                <td>
                  <input
                    type="text"
                    value={answers.zelkova.value}
                    onChange={(e) => handleChange(e, "zelkova")}
                  />
                  <button onClick={() => checkAnswer("zelkova")}>제출</button>
                  <div>{answers.zelkova.result}</div>
                </td>
                <td>
                  <input
                    type="text"
                    value={answers.birch.value}
                    onChange={(e) => handleChange(e, "birch")}
                  />
                  <button onClick={() => checkAnswer("birch")}>제출</button>
                  <div>{answers.birch.result}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="arrow-text">
            <span className="arrow">→</span>
            <span>나무 이름이 모두 4글자</span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <img
            src={remember2}
            alt="나무를 기억해 주세요."
            width={200}
            style={{ marginLeft: "-30px" }}
          />
        </div>
        <div>
          <br /><br />
          <button onClick={() => setPage("TreePage1")}>이전 페이지</button>
          <button onClick={() => setPage("TreePage3")}>다음 페이지</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default TreePage2;
