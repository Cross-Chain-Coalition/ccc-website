import Link from 'next/link';

const EventItem = ({post}) => {
    const {name, created_at, published_at, content: {
        Image, Link, EventTime, Description, RegistrationLink
    }} = post;
    return (
        <div className="event-content">
            <img src={Image.filename} alt={Image.alt} />
            <div>
                <span>
                    {EventTime}
                </span>
                <span>
                    {EventTime}
                </span>
            </div>
            <h5 style={{"fontSize":"24px","fontFamily":"Space Grotesk", "padding":"5px 15px"}}>
                {name}
            </h5>
            <p  style={{"fontSize":"18px","fontFamily":"League Spartan", "padding":"5px 15px"}}>
            {Description.content.content || `CCC's very own @LewisTaariq
welcomes 
@PhilippZentner, CEO &  Founder of LiFi, known for their plug & play SDK to take your project cross chain in an instant ✨`}
            </p>
            <div className="event-content-details flex-space-between">
                <a href={RegistrationLink.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default EventItem;