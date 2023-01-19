import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

const OpenCalendar = () => {

     
      return (
        <div className="calendarContainer" id="calendar">
          <h2>Calendar of Open Meetings</h2>
          <p className="content">If you are interested in participating in one of our open meetings we would like to ask for your contact information as well as ask for a few initial commitments.  Please fill out this form prior to attending.</p>

          <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&showPrint=0&showCalendars=0&showTabs=0&showNav=1&showTitle=1&src=YWQ3OGUyMzFhYzM2YTQ4NGRhODMyODFhZWIyMDdjZDM1YzkxMmE2NWYzZTIxNmVmY2ExNGUzZmJiODI3NjIwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
    );
}

export default OpenCalendar