import photo from "../images/groupPhotoClear.png"

const Mission = () => {
   
    
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
                    <ul>
                        <li>Meetings are self-directed, and based on a set structure that guides men through specific masculine archetypes step by step (Lover, Warrior, Magician, and King)</li>
                        <li>We work honestly with the “Shadow” dimensions of our character as described by Carl Jung, Robert Bly, and other men's-work thinkers.</li>
                        <li>We recognize and bring forth our particular “Gold”</li>
                        <li>This work is done through voluntary processes, requested feedback, deep self-reflection, and ethos of accountability, honesty, and compassion.</li>
                        <li>We do have required rules and guidelines /agreements for participation, to ensure a mutually supportive space</li>
                        <li>There is no charge for these services. The price of admission is your genuine willingness to be open and honest.</li>
                    </ul>
                    <p className="content">Men of Mission and Service Open Circles are hosted once a month on a personal invitation basis.  Denver Hunting Party meets more frequently. </p>
                </div>

                <div className="weDont">
                    <h3>What We Don't Do:</h3>
                    <p className="content">We are entirely self-guided, working independently without any professional oversight. Yet we do aim to bring some level of training and experience to our circles, such as that which can be gained by taking seminars, courses, and the like. It is critical to understand that we are not and do not claim to act as trained therapists, or as other relevant professionals. As such we are unable to support men with significant psychological disorders, or those with untreated or ongoing substance abuse issues.</p>
                    <p className="content">We don't offer advice or feedback, unless explicitly requested. This is a support environment, and not a talk group or a recovery group. In appropriate circumstances, typically with full disclosure and outside counsel, there may be some degree of overlap between such types of groups and this one.</p>
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