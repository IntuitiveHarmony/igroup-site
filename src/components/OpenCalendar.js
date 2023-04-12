
import riverRocks from "../images/riverRocks.png"


const OpenCalendar = ({ mobile }) => {

     
      return (
        <div className="calendarContainer" id="calendar">
          <div className="circleContentContainer">
            <h1 className="circleHeader blueShadow">Attend an Open Circle</h1>
            <p className="content">Men of Mission and Service hosts "Men's Open Circle" about once every five weeks, which is available to any man interested in personal growth and development. <b>Future known dates are posted below.</b></p>

            <p className="content">As the organizers and hosts of these meetings, we strive to create a safe and supportive environment, which can only be done with the full cooperation of our guests.  It is imperative that we know of your intended attendance and are confident of your cooperation in keeping with our standards of conduct by completing our <a className="link" href='https://forms.gle/QGi48a77893jUoLi7' target="_blank" rel="noopener noreferrer">Rules and Guidelines/ Agreements. <i class="fa fa-up-right-from-square"></i></a></p>
          
            <p className="content">We reserve the complete and unilateral right to limit the size of the meetings, if or when necessary, and to invite or disinvite any attendee or prospect.</p>

            <p className="content"><b>If you plan to attend, send us notice at least 24 hours in advance of an Open Circle date</b> via email, or our mobile chat app, Discord (which is our preferred mode of communication).</p>

            <div className="chalkBoard" id="signUp">
              <h2 className="content">Sign Up for an Open Circle!</h2>
              <ul className="steps handCheck">
                <li><b>Step 1: </b>Read and submit our <a className="link" href='https://forms.gle/QGi48a77893jUoLi7' target="_blank" rel="noopener noreferrer">Rules and Guidelines/ Agreements. <i class="fa fa-up-right-from-square"></i></a></li>
                <li><b>Step 2: </b>Let us know you are coming</li>
                  <ul className="subSteps">
                    <li>Download Discord for desktop or mobile: <a className="link" href='https://discord.com/download' target="_blank" rel="noopener noreferrer"><i class="fa fa-up-right-from-square"></i></a> <br/> Join the Men of Mission and Service (MMS) Discord Server: <a className="link" href='https://discord.gg/9XbrvPdG' target="_blank" rel="noopener noreferrer"><i class="fa fa-up-right-from-square"></i></a></li>
                    <li>Old school? Send us an email: <a className="link" href="mailto:menofmissionandservice@gmail.com">{mobile ?  <i class="fa-regular fa-paper-plane"></i> : "menofmissionandservice@gmail.com" }</a></li>
                  </ul>
                <li><b>Step 3: </b>You will receive a personal confirmation message with further details about the meetings.</li>
              </ul>
            </div>
          </div>

          <div className="datesContainer">
            <h2 className="circleHeader blueShadow">Upcoming Open Meetings:</h2>
            <ul className="dates calendarCheck">
              <li>April 24, 2023</li>
              <li>May 29, 2023</li>
              <li>June 29, 2023</li>
              <li>July 3, 2023</li>
              <li>August 7, 2023</li>
              <li>September 4, 2023</li>
              <li>October 9, 2023</li>
            </ul>
            <div className="flexWrapper">
              <img className="riverImg blueBoxShadow" src={riverRocks}/>
            </div>
          </div>
          {/* <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YWQ3OGUyMzFhYzM2YTQ4NGRhODMyODFhZWIyMDdjZDM1YzkxMmE2NWYzZTIxNmVmY2ExNGUzZmJiODI3NjIwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" width="800" height="600" frameborder="0" scrolling="no" ></iframe> */}
          
        </div>
    );
}

export default OpenCalendar