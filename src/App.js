
import './App.css';
import Nav from './components/Nav';
import Mission from './components/Mission';
import OpenCalendar from './components/OpenCalendar';

const App = () => {
  const minWidth = 900;

  return (
    <>
      <Nav minWidth={minWidth} />
      <Mission id="mission" className="missionSection" />
      <OpenCalendar id="calendar" className="calendarSection" />
    </>
  )
}

export default App;
