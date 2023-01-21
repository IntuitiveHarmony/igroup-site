
const OpenCalendar = () => {

     
      return (
        <div className="calendarContainer" id="calendar">
          <h1>Open Meetings</h1>
          <p className="content">Men of Mission and Service hosts a monthly “Open Meetings” for any man interested in personal accountability and growth. Available dates are posted below. As a pre-requisite men must review and acknowledge our foundational <a href="https://forms.gle/QGi48a77893jUoLi7" target="_blank" rel="noopener noreferrer">agreements.</a></p>

          <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&showPrint=0&showCalendars=0&showTabs=0&showNav=1&showTitle=1&src=YWQ3OGUyMzFhYzM2YTQ4NGRhODMyODFhZWIyMDdjZDM1YzkxMmE2NWYzZTIxNmVmY2ExNGUzZmJiODI3NjIwYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
    );
}

export default OpenCalendar