function DatesList() {
  return (
    <>
      <h2 className="datesHeader blueShadow">Upcoming Open Circles:</h2>
      <ul className="dates calendarCheck">
        <li>
          <a
            href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Event Title
DESCRIPTION:Event Description
LOCATION:Event Location
DTSTART:20231001T120000
DTEND:20231001T140000
END:VEVENT
END:VCALENDAR"
            download="event.ics"
          >
            September 11, 2023
          </a>
        </li>
        <li>October 16, 2023</li>
        <li>February 5, 2024</li>
        <li>March 11, 2024</li>
        <li>April 15, 2024</li>
        <li>May 20, 2024</li>
        <li>June 24, 2024</li>
        <li>July 29, 2024</li>
        <li>September 9, 2024</li>
        <li>September 30, 2024</li>
      </ul>
    </>
  );
}
export default DatesList;
