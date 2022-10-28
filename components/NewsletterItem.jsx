import Link from 'next/link';
import { convertDateStringWithWeekDay } from '../utils/date';


const NewsletterItem = ({post}) => {
    const {created_at, published_at, content: {
        Banner, Link, PublishDate, Text
    }} = post;
    const dateBefore = post.content.PublishDate.split(' ')[0];
    return (
        <div className="newsletter-content">
            <img src={Banner.filename} alt={Banner.alt} />
            <p>
            {Text}
            </p>
            <div className="newsletter-content-details flex-space-between">
                <span sytle={{"color":"#5E5E5E","fontSize":"12px"}}>
                    {convertDateStringWithWeekDay(post.content.PublishDate, true)}
                </span>
                <a href={Link.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-content">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default NewsletterItem;