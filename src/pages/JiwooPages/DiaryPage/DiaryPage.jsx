import React, { useState } from "react";
import "./Diary.css";
import sun from "./sun.png";
import cloud from "./cloud.png";
import rain from "./rain.png";
import snow from "./snow.png";

const Diary = () => {
  const [diary, setDiary] = useState({
    date: {
      year: "",
      month: "",
      day: "",
      weekday: "",
    },
    places: "",
    people: "",
    purchases: "",
    consumption: "",
    news: "",
    schedule: {
      morning: "",
      forenoon: "",
      afternoon: "",
      evening: "",
    },
    plan: "",
  });
  
  const handleChange = (e, field, section = null) => {
    if (section) {
      setDiary({
        ...diary,
        [section]: {
          ...diary[section],
          [field]: e.target.value,
        },
      });
    } else {
      setDiary({
        ...diary,
        [field]: e.target.value,
      });
    }
  };

  const WeatherSelect = (weather) => {
    setDiary({ ...diary, weather });
  };

  return (
    <div className="diary_container">
      <div className="header">
        <span className="header-title">일기</span>
      </div>

      <div className="date_weather_container">
        <input
          className="date_input"
          value={diary.date.year}
          onChange={(e) => handleChange(e, "year", "date")}
        />년
        <input
          className="date_input"
          value={diary.date.month}
          onChange={(e) => handleChange(e, "month", "date")}
        />월
        <input
          className="date_input"
          value={diary.date.day}
          onChange={(e) => handleChange(e, "day", "date")}
        />일
        <input
          className="date_input"
          value={diary.date.weekday}
          onChange={(e) => handleChange(e, "weekday", "date")}
        />요일

        <span className="weather_title">&nbsp;&nbsp;&nbsp;날씨</span>
        <div className="weather_icons">
          <img
            src={sun}
            alt="sunny"
            className={`weather_icon ${diary.weather === "sunny" ? "selected" : ""}`}
            onClick={() => WeatherSelect("sunny")}
          />
          <img
            src={cloud}
            alt="cloudy"
            className={`weather_icon ${diary.weather === "cloudy" ? "selected" : ""}`}
            onClick={() => WeatherSelect("cloudy")}
          />
          <img
            src={rain}
            alt="rainy"
            className={`weather_icon ${diary.weather === "rainy" ? "selected" : ""}`}
            onClick={() => WeatherSelect("rainy")}
          />
          <img
            src={snow}
            alt="snowy"
            className={`weather_icon ${diary.weather === "snowy" ? "selected" : ""}`}
            onClick={() => WeatherSelect("snowy")}
          />
        </div>
      </div>

      <div className="table_section">
        <table className="main_table">
          <tbody>
            <tr>
              <th className="header_table" colSpan="4">나의 하루</th>
            </tr>
            <tr>
              <td className="label_table">방문한 장소</td>
              <td className="input_table_cell">
                <input
                  className="input_tablee"
                  value={diary.places}
                  onChange={(e) => handleChange(e, "places")}
                />
              </td>
              <td className="label_table">오늘 만난 사람</td>
              <td className="input_table_cell">
                <input
                  className="input_tablee"
                  value={diary.people}
                  onChange={(e) => handleChange(e, "people")}
                />
              </td>
            </tr>
            <tr>
              <td className="label_table">구입한 물건</td>
              <td className="input_table_cell">
                <input
                  className="input_tablee"
                  value={diary.purchases}
                  onChange={(e) => handleChange(e, "purchases")}
                />
              </td>
              <td className="label_table">지출 금액</td>
              <td className="input_table_cell">
                <input
                  className="input_tablee"
                  value={diary.consumption}
                  onChange={(e) => handleChange(e, "consumption")}
                />
              </td>
            </tr>
            <tr>
              <td className="label_table">오늘의 뉴스</td>
              <td className="input_table_cell" colSpan="3">
                <input
                  className="input_tablee"
                  value={diary.news}
                  onChange={(e) => handleChange(e, "news")}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="schedule_table">
          <tbody>
            <tr>
              <th>시각</th>
              <th>중요한 일</th>
              <th>내용</th>
            </tr>
            <tr>
              <td>오전 5-8시</td>
              <td>일어나서 한 일</td>
              <td>
                <input
                  className="input_tablee"
                  value={diary.schedule.morning}
                  onChange={(e) => handleChange(e, "morning", "schedule")}
                />
              </td>
            </tr>
            <tr>
              <td>오전 8-12시</td>
              <td>아침식사 후에 한 일</td>
              <td>
                <input
                  className="input_tablee"
                  value={diary.schedule.forenoon}
                  onChange={(e) => handleChange(e, "forenoon", "schedule")}
                />
              </td>
            </tr>
            <tr>
              <td>오후 12-5시</td>
              <td>오후에 한 일</td>
              <td>
                <input
                  className="input_tablee"
                  value={diary.schedule.afternoon}
                  onChange={(e) => handleChange(e, "afternoon", "schedule")}
                />
              </td>
            </tr>
            <tr>
              <td>오후 5-10시</td>
              <td>저녁식사 후에 한 일</td>
              <td>
                <input
                  className="input_tablee"
                  value={diary.schedule.evening}
                  onChange={(e) => handleChange(e, "evening", "schedule")}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="plan_table">
          <tbody>
            <tr>
              <td>내일 계획</td>
              <td>
                <input
                  className="input_tablee"
                  value={diary.plan}
                  onChange={(e) => handleChange(e, "plan")}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer_section">
        <table className="footer_table">
          <tbody>
            <tr>
              <td className="footer_title">뇌건강을 위한 생활습관</td>
              <td className="footer_content">
                <span>✔️ 대뇌활동을 열심히 합시다.</span>
                <p>독서나 퍼즐 등과 같은 두뇌활동은 뇌를 자극하여 뇌의 구조와 기능에 좋은 영향을 미칩니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Diary;

