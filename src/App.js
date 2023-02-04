
import './App.css';
import Nav from './components/Nav';
import Mission from './components/Mission';
import OpenCalendar from './components/OpenCalendar';

const App = () => {

  return (
    <>
      <Nav />
      <Mission id="mission" />
      <OpenCalendar id="calendar" />
    </>
  )
}

export default App;
