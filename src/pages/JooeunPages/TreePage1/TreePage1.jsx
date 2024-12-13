import React from "react";
import "./TreePage1.style.css";
import remember1 from "../image/remember.png";
import remember2 from "../image/footer.png";
import daenamu from "../image/tree.jpg";
import sonamu from "../image/sonamu.png";
import hwei from "../image/hwei.jpg";
import budnamu from "../image/budnamu.jpg";
import zelkova from "../image/zelkova.jpg";
import birch from "../image/birch.jpg";

const TreePage1 = ({ setPage }) => {
  return (
    <div className="page-26">
      <div className="content">
        <div>
          <img src={remember1} alt="나무 기억하기" width={150} />
        </div>
        <div>
          <p>
            다음은 우리나라에서 볼 수 있는{" "}
            <span style={{ color: "red" }}>나무</span>입니다.
          </p>
          <table className="problem-img">
            <tbody>
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
                <td>대나무</td>
                <td>소나무</td>
                <td>희양목</td>
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
                <td>버드나무</td>
                <td>느티나무</td>
                <td>자작나무</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img src={remember2} alt="나무를 기억해 주세요." width={150} />
        </div>
        <div>
          <br /><br />
          <button onClick={() => setPage("TreePage2")}>다음 페이지</button>
        </div>
      </div>
    </div>
  );
};

export default TreePage1;
