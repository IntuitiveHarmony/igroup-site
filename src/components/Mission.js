import photo from "../images/groupPhoto.png"
import tree from "../images/tree.png"
import { Link } from 'react-scroll'


const Mission = (props) => {

    return (
        <>
            <div className="missionContainer" id="mission">
                <div className='photoContainer'>

                    <img  className='introPhoto' src='https://images.unsplash.com/photo-1548638643-b16e0ceab1cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80' />
                </div>
                {/* <img id="groupPhoto" src={photo} /> */}
                <div className="missionContentContainer">
                    <div className="leftColumn">
                        <div className="welcome">
                            <h1 className="blueShadow">Welcome</h1>
                            <p className="content">The purpose of this website is to provide you with some ground-level information about Men of Mission and Service and guide you through the steps to attend one of our “Men's Open Circles” should you have interest in participating.</p>
                        </div>

                        <div className="background">
                            <h3>Background</h3>
                            <p className="content">Men of Mission and Service hosts regular “Men's Open Circles” for men from the larger community/public to experience the merit of “Men's Work.” These meetings are run by two long-standing, local men's groups who jointly share the responsibility and facilitation of hosting the Open Circles about once every five weeks.</p>
                        </div>
                        <div className="missionStatement">
                            <h3>Mission</h3>
                            <p className="content">Open Circles are a safe place for new and seasoned men to generously share the merits of Men's Work. We do this through regular gatherings, outreach to existing men's groups & organizations, personal invitation, and word of mouth. Our work is generative and has a legacy.</p>
                        </div>
                        
                        <img className="treeImg blueBoxShadow" src={tree} />
                        {/* <img className="treeImg" src={treePhoto}/> */}
                        {/* <div className="ourMission">
                            <h3>Our Mission</h3>
                            <p className="content"><i>We are thoughtful, caring men co-creating a safe container environment for personal growth as we deepen our connection to the mature masculine. We show up with authenticity, vulnerability, honesty, compassion and the courage to do our individual work. In addition, we are accountable by setting personal goals; initiating acts of service; offering support; and being present for the entire group.</i></p>
                        </div> */}
                    </div>

                    <div className="rightColumn chalkBoard">
                        <div className="weDo">
                            <h3><u>What We Do</u></h3>
                            <p className="content">In essence, our meetings are a safe place to give and receive support from fellow men; to work through challenges and grow into a fuller version of ourselves. This looks like:</p>
                            <ul className="doList greenCheck">
                                <li>Meetings are self-directed, and based on a set structure that guides men through specific masculine archetypes step by step (Lover, Warrior, Magician, and King)</li>
                                <li>We work honestly with the “shadow” dimensions of our character as described by Carl Jung, Robert Bly, and other men's-work thinkers.</li>
                                <li>We recognize and bring forth our particular “Gold”</li>
                                <li>This work is done through voluntary processes, requested feedback, deep self-reflection, and ethos of accountability, honesty, and compassion.</li>
                                <li>We do have required <a href='https://forms.gle/QGi48a77893jUoLi7' target="_blank" rel="noopener noreferrer">Rules and Guidelines/ Agreements <i class="fa fa-up-right-from-square"></i></a>, to ensure a mutually supportive space</li>
                                <li>There is no charge for these services. The price of admission is your genuine willingness to be open and honest.</li>
                            </ul>
                            <p className="content">Men of Mission and Service {props.mobile ? // mobile vs desktop links have diffrent offset
                            <Link className="contentLink" to="calendar" smooth={true} 
                            // onClick={() => handleHideNav()}
                            >Open Circles</Link> 
                            : 
                            <Link className="contentLink" to="calendar" smooth={true} offset={-50} >Open Circles</Link> } are hosted about every five weeks.</p>
                        </div>

                        <div className="weDont">
                            <h3><u>What We Don't Do</u></h3>
                            <p className="content">We are entirely self-guided, working independently without any professional oversight. We bring some level of training and experience of men's work based on weekend workshops and courses.</p>
                            <ul className="doList redCheck">
                                <li>We are not and do not claim to act as trained therapists or professional healers</li>
                                <li>As such, we are unable to support men with significant psychological disorders, or those with untreated or ongoing substance abuse issues</li>
                                <li>We don't offer advice or feedback, unless explicitly requested</li>
                                <li>This is a support environment, and not a talk therapy group or a recovery group</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Mission