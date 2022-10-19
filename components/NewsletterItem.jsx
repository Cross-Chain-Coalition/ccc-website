import Link from 'next/link';

const NewsletterItem = ({post}) => {
    const {created_at, published_at, content: {
        Banner, Link, PublishDate, Text
    }} = post;
    const date = post.content.PublishDate.split(' ')[0];
    console.log(date);
    return (
        <div className="newsletter-content">
            <img src={Banner.filename} alt={Banner.alt} />
            <p>
            {Text}
            </p>
            <div className="newsletter-content-details flex-space-between">
                <div>
                {date}
                </div>
                <a href={Link.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default NewsletterItem;