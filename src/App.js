import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Mission from './components/Mission';
import OpenCalendar from './components/OpenCalendar';

const App = () => {
  const minWidth = 900;

  const [mobile, setMobile] = useState(window.innerWidth < minWidth) 

  return (
    <>
      <Nav 
        minWidth={minWidth}
        mobile={mobile} 
        setMobile={setMobile}
        />
      <Mission id="mission" className="missionSection" mobile={mobile} />
      <OpenCalendar id="calendar" className="calendarSection" />
    </>
  )
}

export default App;
