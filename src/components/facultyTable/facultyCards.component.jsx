import React from "react";
import email from "../../assets/email.png";

export default function ClassDetails({ detail, className }) {
  const { pfp, name, cabin, timeSlot } = detail;

  return (
    <article className={`faculty-card-faculty ${className}`}>
      <img src={pfp} alt="faculty-pfp" className="faculty-pfp-faculty" />
      <div className="faculty-name-cabin-faculty">
        <p className="faculty-name-faculty">{name}</p>
        <p className="faculty-cabin-faculty">Cabin - {cabin}</p>
      </div>
      <img src={email} alt="faculty-mail" className="faculty-mail-faculty" />
      <div className="faculty-timeSlot-container-faculty">
        <p className="faculty-timeSlot-faculty">Time Slot</p>
        <p className="faculty-time-faculty">{timeSlot}</p>
      </div>
      <button className="faculty-contact-faculty">Contact</button>
    </article>
  );
}
