import { useEffect, useState } from "react";
import ClassDetails from "./classDetails.component";

import "./class.styles.css";
import redRadialGradient from "../../assets/red-radial-gradient.png";
import greenRadialGradient from "../../assets/green-radial-gradient.png";


import startedData from '../../Data/startedData.js'
import notStartedData from "../../Data/notStartedData.js";

export default function Class({ started }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (started) {
      setDetails(startedData);
    }
    if (started === false) {
      setDetails(notStartedData);
    }
  }, []);

  return (
    <article className="class-amit">
      {/* Heading */}
      <div className="class-heading-amit">
        {started ? (
          <img
            className="status-amit"
            alt="status-radial-gradient"
            src={greenRadialGradient}
          />
        ) : (
          <img
            className="status-amit"
            alt="status-radial-gradient"
            src={redRadialGradient}
          />
        )}
        <h4>{started ? "Started" : "Not Started"} Class</h4>
      </div>

      <div className="class-group-amit">
        {/* Details */}
        {details.map((detail, i) => (
          <ClassDetails key={i} detail={detail} />
        ))}
      </div>
    </article>
  );
}
