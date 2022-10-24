import { convertDateStringWithDay } from '../utils/date';
import { render } from "storyblok-rich-text-react-renderer";

const EventItemPast = ({post}) => {
    const {name, created_at, published_at, content: {
        Image, Link, EventTime, Description, RegistrationLink
    }} = post;

    const your_date_object = new Date();
    your_date_object.setTime(Date.parse( EventTime ));

    const min = your_date_object.getUTCMinutes();
    const hour = your_date_object.getUTCHours();
    console.log(hour, min)
    return (
        <div className="event-content">
            <img src={Image.filename} alt={Image.alt} />
            <div>
                <div style={{"padding":"5px 10px"}}>
                    <img src="/date.svg" alt="date icon" style={{"padding":"5px"}} />
                    <span style={{"paddingRight":"10px"}}>
                        {convertDateStringWithDay(EventTime)}
                    </span>
                    <img src="/time.svg" alt="time icon" style={{"padding":"5px"}} />
                    <span>
                        {hour + ":" + min}
                    </span>
                </div>
            </div>
            <h5 style={{"fontSize":"24px","fontFamily":"Space Grotesk", "padding":"5px 15px"}}>
                {name}
            </h5>
            <p style={{"fontSize":"18px","fontFamily":"League Spartan", "padding":"0px"}}>
            {render(Description)}
            </p>
            <div className="event-content-details flex-space-between">
                <a href={RegistrationLink.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                    Play Recording
                </a>
            </div>
        </div>
    )
}

export default EventItemPast;