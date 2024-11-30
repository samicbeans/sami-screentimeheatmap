/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import * as d3 from 'd3';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './Heatmap.css';

const Heatmap = ({ data }) => {
  const colorScale = d3.scaleLinear().domain([0, 10]).range(['#F8E0D4', '#CC4303']);
  const startDayOfWeek = new Date(2024, 9, 1).getDay();

  const getDayData = (day) => {
    const fullDate = `2024-10-${String(day).padStart(2, '0')}`;
    return data.find((item) => item.Date === fullDate);
  };

  return (
    <div className="heatmap">
      <h2>October 2024 Screentime Heatmap</h2>
      <div className="calendar">
        {[...Array(startDayOfWeek)].map((_, index) => (
          <div key={`empty-${index}`} className="day-box empty" />
        ))}
        {[...Array(31)].map((_, index) => {
          const day = index + 1;
          const dayData = getDayData(day);
          const color = dayData
            ? colorScale(dayData["Total Screentime"])
            : "rgb(226, 146, 108)";
          const tooltip = dayData
            ? `Date: ${dayData.Date}\nChrome: ${dayData["Chrome (hrs)"]} hrs\nRoblox: ${dayData["Roblox (hrs)"]} hrs\nYoutube: ${dayData["Youtube (hrs)"]} hrs\nInstagram: ${dayData["Instagram (hrs)"]} hrs\nOther: ${dayData["Other apps (hrs)"]} hrs`
            : 'No data';

          return (
            <div
              key={day}
              className="day-box"
              style={{ backgroundColor: color, opacity: 1 }}
              data-tooltip-content={tooltip}
            >
              {day}
            </div>
          );
        })}
        <ReactTooltip anchorSelect=".day-box" className="custom-tooltip" multiline={true} />
      </div>
    </div>
  );
};

export default Heatmap;

