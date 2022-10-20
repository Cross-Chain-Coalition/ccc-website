import Link from 'next/link';
import { getHourOffsetLocalTimezone, convertDateStringWithWeekDay, convertUTCtoLocalTime } from '../utils/date';

const EventItem = ({post}) => {
    const {name, created_at, published_at, content: {
        Image, Link, EventTime, Description, RegistrationLink
    }} = post;
    var your_date_object = new Date();
    your_date_object.setTime(Date.parse( EventTime ));

    var min = your_date_object.getUTCMinutes();
    var hour = your_date_object.getUTCHours();
    console.log(hour, min)
    return (
        <div className="event-content">
            <img src={Image.filename} alt={Image.alt} />
            <div>
                <div style={{"padding":"5px 15px"}}>
                    <img src="/date.svg" alt="date icon" style={{"padding":"5px"}} />
                    <span style={{"paddingRight":"10px"}}>
                        {convertDateStringWithWeekDay(EventTime)}
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
            <p  style={{"fontSize":"18px","fontFamily":"League Spartan", "padding":"5px 15px"}}>
            CCC's very own @LewisTaariq welcomes @PhilippZentner, CEO &  Founder of LiFi, known for their plug & play SDK to take your project cross chain in an instant ✨` {Description.content.content}
            </p>
            <div className="event-content-details flex-space-between">
                <a href={RegistrationLink.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default EventItem;