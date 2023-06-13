import PropTypes from 'prop-types'
import BlogItem from '@/components/Blogs/BlogItem'

function LatestBlog({ sectionTitle, blogs }) {
  const slice = blogs.slice(0, 3)
  return (
    <div className='latest-blog py-[40px] md:py-[70px] lg:py-[90px]'>
      <div className='container'>
        <div className='section-title after:bg-primary relative mb-[50px] pb-[10px] text-center after:absolute after:bottom-0 after:left-1/2 after:h-[4px] after:w-[70px] after:-translate-x-1/2 after:transform'>
          <h2>{sectionTitle}</h2>
        </div>
        <div className='grid gap-[25px] lm:grid-cols-2 lg:grid-cols-3'>
          {slice.map(blog => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

LatestBlog.propTypes = {
  blogs: PropTypes.instanceOf(Array).isRequired,
  sectionTitle: PropTypes.string.isRequired
}

export default LatestBlog
