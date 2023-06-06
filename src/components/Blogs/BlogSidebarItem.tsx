import PropTypes from 'prop-types';
import Link from 'next/link';

function BlogSidebarItem({ blog }) {
    const formattedDate = new Date(blog?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div className="blog-item overflow-hidden group">
            <div className="blog-img relative">
                <Link href={`/blogs/${blog?.slug}`} className="blog-img block">
                    <img
                        className="object-cover object-center w-full"
                        src={`/images/blogs/${blog?.slug}/${blog?.largeImage}`}
                        alt={blog?.altImage}
                        width={854}
                        height={491}
                    />
                </Link>
            </div>
            <div className="blog-content pt-[25px]">
                <h2 className="text-[20px] leading-7 mb-[15px]">
                    <Link
                        href={`/blogs/${blog?.slug}`}
                        className="text-[26px] transition-all hover:text-primary"
                    >
                        {blog?.title}
                    </Link>
                </h2>
                <div className="blog-meta text-[14px]">
                    <span className='date after:text-[#999999] after:px-[8px] after:content-["/"]'>
                        {formattedDate}
                    </span>
                    <Link
                        href="https://www.example.com/"
                        className='author font-normal hover:text-primary transition-all after:text-[#999999] after:px-[8px] after:content-["/"]'
                    >
                        {blog?.author}
                    </Link>
                    <span>
                        <span className="text-[#999999] mr-[5px]">in</span>
                        <Link
                            href={`/blogs/${blog?.slug}`}
                            className="category font-normal hover:text-primary transition-all"
                        >
                            {blog?.categoryItem}
                        </Link>
                    </span>
                </div>
                <p>{blog?.desc}</p>
                <div className="btn-wrap flex justify-start pt-[45px]">
                    <Link
                        href={`/blogs/${blog?.slug}`}
                        className="border border-heading text-[15px] px-[32px] h-[40px] leading-[38px] transition-all hover:bg-heading hover:text-white"
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

BlogSidebarItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogSidebarItem;
