import photo from "../images/groupPhotoClear.png"

const Mission = () => {
   
    
    return (
        <>
            <div className="missionContainer" id="mission">
                <img id="groupPhoto" src={photo} />
                <div>
                    <h3>Welcome</h3>
                    <p>The purpose of this website is to provide you with some ground level information about our men's group, Denver Hunting Party (DHP) and guide you through the steps to attend one of our “Open Circles” should you have interest in participating.</p>
                </div>

                <div className="mission1">
                    <h3>What We Do:</h3>
                    <p className="content">Men of Mission and Service (MMS) was formed in late 2022 as a circle dedicated to introducing basic concepts common to many mens' support groups, and to personal development in general.</p>
                    <p className="content">Driven by cornerstone teachings and concepts in psychology, especially around the work upon "shadow" as described by Carl Jung, Robert Bly, and others, in MMS' Open Men's Circle  meetings, organizers and attendees reference and work from four primary archetypes as a template for reflection and growth: Lover, Warrior, Magician, and King.</p>
                    <p className="content">MMS supports men to consciously work with their shadows and develop their gold; in other words, by working with the disowned or denied parts of ourselves we can discover and develop powerful underlying positive attributes. This work is done through voluntary processes, requested feedback, deep self-reflection, and ethos of accountability, honesty, and compassion.</p>
                    <p className="content">MMS endeavors to hold a Open Men's Circle once a <a href="#calendar">month</a>, where it welcomes pre-registered non-members*. Core members of MMS meet privately among themselves, in different smaller groups, at various intervals.</p>
                    <p className="content">MMS Open Men's Circles are primarily led by a group of men associated with a particular private men's group, Denver Hunting Party, which was formed in 2013 and remains in operation. Open Men's Circles are intended to share tools used by tens of thousands of individuals belonging to men's groups, worldwide.</p>
                    {/* <p className="content">*To visit an Open Men's Circle, first review our “Circles” tab above then complete and submit our Rules and Guidelines form. Next, send us a notice of your intended date(s) of attendance. When these steps are complete, you will receive further communication regarding the location of the next meeting.</p> */}
                </div>

                <div className="mission2">
                    <h3>What We Don't Do:</h3>
                    <p className="content">We are entirely self-guided, working independently without any professional oversight. Yet we do aim to bring some level of training and experience to our circles, such as that which can be gained by taking seminars, courses, and the like. It is critical to understand that we are not and do not claim to act as trained therapists, or as other relevant professionals. As such we are unable to support men with significant psychological disorders, or those with untreated or ongoing substance abuse issues.</p>
                    <p className="content">We don't offer advice or feedback, unless explicitly requested. This is a support environment, and not a talk group or a recovery group. In appropriate circumstances, typically with full disclosure and outside counsel, there may be some degree of overlap between such types of groups and this one.</p>
                </div>

                <div className="mission3">
                    <h3>Our Mission:</h3>
                    <p className="content"><i>We are thoughtful, caring men co-creating a safe container environment for personal growth as we deepen our connection to the mature masculine. We show up with authenticity, vulnerability, honesty, compassion and the courage to do our individual work. In addition, we are accountable by setting personal goals; initiating acts of service; offering support; and being present for the entire group.</i></p>
                </div>
            </div>
        </>
    )
}

export default Mission