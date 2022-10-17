import Link from 'next/link';

const NewsletterItem = ({post}) => {
    const {created_at, published_at, content: {
        Banner, Link, PublishedDate, Text
    }} = post;
    return (
        <div className="newsletter-content">
            <img src={Banner.filename} alt={Banner.alt} />
            <p>
            {Text}
            </p>
            <div className="newsletter-content-details flex-space-between">
                <span>
                {PublishedDate}
                </span>
                <a href={Link.url} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default NewsletterItem;