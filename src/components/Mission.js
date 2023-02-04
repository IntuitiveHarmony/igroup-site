import photo from "../images/groupPhotoClear.png"
import { Link } from 'react-scroll'

const Mission = (props) => {
   
    
    return (
        <>
            <div className="missionContainer" id="mission">
                <img id="groupPhoto" src={photo} />
                <div className="welcome">
                    <h1>Welcome</h1>
                    <p className="content">The purpose of this website is to provide you with some ground level information about our men's group, Denver Hunting Party (DHP) and guide you through the steps to attend one of our “Open Circles” should you have interest in participating.</p>
                </div>

                <div className="background">
                    <h3>Background</h3>
                    <p className="content">Open Circles are hosted by the Denver Hunting Party. DHP is a dedicated space for men to mutually support one another and has met bi-monthly since 2013. In late 2022, we committed to lean into the service dimension of our mission and host monthly “Open Meetings” for men and do so under the namesake “Men of Mission and Service (MMS).</p>
                </div>

                <div className="weDo">
                    <h3>What We Do:</h3>
                    <p className="content">In essence, our meetings are a safe place to give and receive support from fellow men; to work through challenges and grow into a fuller version of ourselves.  This looks like:</p>
                    <ul className="doLists">
                        <li>Meetings are self-directed, and based on a set structure that guides men through specific masculine archetypes step by step (Lover, Warrior, Magician, and King)</li>
                        <li>We work honestly with the “Shadow” dimensions of our character as described by Carl Jung, Robert Bly, and other men's-work thinkers.</li>
                        <li>We recognize and bring forth our particular “Gold”</li>
                        <li>This work is done through voluntary processes, requested feedback, deep self-reflection, and ethos of accountability, honesty, and compassion.</li>
                        <li>We do have <a href='https://forms.gle/QGi48a77893jUoLi7' target="_blank" rel="noopener noreferrer">required Rules and Guidelines/ Agreements</a>, to ensure a mutually supportive space</li>
                        <li>There is no charge for these services. The price of admission is your genuine willingness to be open and honest.</li>
                    </ul>
                    <p className="content">Men of Mission and Service {props.mobile ? 
                    <Link className="contentLink" to="calendar" smooth={true} 
                    // onClick={() => handleHideNav()}
                    >Open Circles</Link> 
                    : 
                    <Link className="contentLink" to="calendar" smooth={true} offset={-50} >Open Circles</Link> } are hosted once a month on a personal invitation basis.  Denver Hunting Party meets more frequently. </p>
                </div>

                

                <div className="weDont">
                    <h3>What We Don't Do:</h3>
                    <p className="content">We are entirely self-guided, working independently without any professional oversight. We bring some level of training and experience of men's work based on weekend workshops and courses.</p>
                    <ul className="doLists">
                        <li>We are not and do not claim to act as trained therapists or professional healers</li>
                        <li>As such, we are unable to support men with significant psychological disorders, or those with untreated or ongoing substance abuse issues</li>
                        <li>We don't offer advice or feedback, unless explicitly requested</li>
                        <li>This is a support environment, and not a talk therapy group or a recovery group</li>
                    </ul>
                </div>

                <div className="ourMission">
                    <h3>Our Mission:</h3>
                    <p className="content"><i>We are thoughtful, caring men co-creating a safe container environment for personal growth as we deepen our connection to the mature masculine. We show up with authenticity, vulnerability, honesty, compassion and the courage to do our individual work. In addition, we are accountable by setting personal goals; initiating acts of service; offering support; and being present for the entire group.</i></p>
                </div>
            </div>
        </>
    )
}

export default Mission