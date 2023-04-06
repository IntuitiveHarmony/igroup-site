import axios from 'axios'
import {useState, useEffect} from 'react'


function CalendarAPI() {
    const [calendarData, setCalendarData] = useState()


    useEffect(()=>{
        axios
            .get('https://www.googleapis.com/calendar/v3/calendars/{process.env.ID}')
            .then((response)=>{
                setCalendarData(response.data)
    
            })
    },[])
}

export default CalendarAPI
