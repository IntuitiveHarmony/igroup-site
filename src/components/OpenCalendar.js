import riverRocks from "../images/riverRocks.png";
import DatesList from "./DatesList";

const OpenCalendar = ({ mobile }) => {
  return (
    <div className="calendarContainer" id="calendar">
      <div className="circleContentContainer">
        <h1 className="circleHeader blueShadow">Attend an Open Circle</h1>
        <p className="content">
          Men of Mission and Service hosts "Men's Open Circle" about once every
          seven weeks, which is available to any man interested in personal
          growth and development. <b>Future known dates are posted below.</b>
        </p>
        <p className="content">
          As the organizers and hosts of these meetings, we strive to create a
          safe and supportive environment, which can only be done with the full
          cooperation of our guests. It is imperative that we know of your
          intended attendance and are confident of your cooperation in keeping
          with our standards of conduct by completing our{" "}
          <a
            className="link"
            href="https://forms.gle/QGi48a77893jUoLi7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rules and Guidelines/ Agreements.{" "}
            <i class="fa fa-up-right-from-square"></i>
          </a>
        </p>
        <p className="content">
          We reserve the complete and unilateral right to limit the size of the
          meetings, if or when necessary, and to invite or disinvite any
          attendee or prospect.
        </p>
        <p className="content">
          <b>
            If you plan to attend, send us notice at least 24 hours in advance
            of an Open Circle date
          </b>{" "}
          via email, or our mobile chat app, Discord (which is our preferred
          mode of communication).
        </p>
        {mobile && <DatesList />} {/* Dates come first in mobile version */}
        <div className="chalkBoard" id="signUp">
          <h2 className="content">Sign Up for an Open Circle!</h2>
          <ul className="steps handCheck">
            <li>
              Review our Rules and Agreements and let us know you are coming by filling out this {" "}
              <a
                className="link"
                href="https://forms.gle/QGi48a77893jUoLi7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Form{" "}
                <i class="fa fa-up-right-from-square"></i>
              </a>.
            </li>
            <ul className="subSteps">
              <li>
                Old school? Send us an email:{" "}
                <a
                  className="link"
                  href="mailto:menofmissionandservice@googlegroups.com"
                >
                  {mobile ? (
                    <i class="fa-regular fa-paper-plane"></i>
                  ) : (
                    "menofmissionandservice@googlegroups.com"
                  )}.
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="datesContainer">
        {!mobile && <DatesList />}{" "}
        {/* Dates in the middle in desktop version */}
        <div className="flexWrapper">
          <img className="riverImg blueBoxShadow" src={riverRocks} />
        </div>
      </div>
    </div>
  );
};

export default OpenCalendar;
