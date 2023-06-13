import PropTypes from 'prop-types'
import * as IoIcon from 'react-icons/io5'
import ProgressBar from '../ProgressBar'
import VideoModal from '../VideoModal'

function AboutUs({ aboutItems }) {
  return (
    <div className='about border-b border-[#ededed] py-[50px] md:py-[80px] lg:py-[90px]'>
      <div className='video-banner'>
        <div className='container'>
          <div className='blog-img group relative flex overflow-hidden after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[rgba(0,0,0,.4)] after:opacity-0 after:transition-all after:duration-500 hover:after:opacity-100'>
            <img
              className='w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.05]'
              src={aboutItems[0]?.videoBanner}
              alt={aboutItems[0]?.videoBannerAlt}
              width={1170}
              height={680}
            />
            <VideoModal />
          </div>
        </div>
      </div>
      <div className='support-info'>
        <div className='container'>
          <div className='my-[60px] grid grid-cols-12 gap-x-[30px] max-md:gap-y-[30px]'>
            {aboutItems[0]?.singleSupportInfo?.map(items => {
              const InfoIcon = IoIcon[items.infoIcon]
              return (
                <div
                  className='col-span-12 lm:col-span-6 md:col-span-4 lg:col-span-3'
                  key={items.id}
                >
                  <div className='single-support-info'>
                    <div className='flex flex-col'>
                      <div className='content mb-[20px] flex items-center'>
                        <span className='icon mr-[20px] text-[36px]'>
                          <InfoIcon />
                        </span>
                        <h2 className='text-[18px]'>{items.title}</h2>
                      </div>
                      <p className='lg:max-w-[250px]'>{items.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='perfection'>
        <div className='container'>
          <div className='grid grid-cols-12 max-sm:gap-y-[30px] lm:gap-x-[40px]'>
            <div className='col-span-12 lm:col-span-7'>
              <h2 className='mb-[10px] text-[24px]'>
                {aboutItems[0]?.perfectionTitle}
              </h2>
              <p>{aboutItems[0]?.perfectionDesc}</p>
            </div>
            <div className='col-span-12 lm:col-span-5'>
              <ProgressBar title='Creativity' progressText='82%' />
              <ProgressBar title='Advertising' progressText='82%' />
              <ProgressBar title='Design' progressText='70%' />
            </div>
          </div>
        </div>
      </div>
      <div className='about-banner pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-[10px]'>
            <div className='col-span-8'>
              <div className='single-img overflow-hidden'>
                <img
                  className='block w-full transition-all duration-500 hover:scale-[1.05]'
                  src={aboutItems[0]?.aboutBannerOne}
                  alt={aboutItems[0]?.aboutBannerAlt}
                />
              </div>
            </div>
            <div className='col-span-4'>
              <div className='single-img mb-[10px] overflow-hidden'>
                <img
                  className='block w-full transition-all duration-500 hover:scale-[1.05]'
                  src={aboutItems[0]?.aboutBannerTwo}
                  alt={aboutItems[0]?.aboutBannerAlt}
                />
              </div>
              <div className='single-img overflow-hidden'>
                <img
                  className='block w-full transition-all duration-500 hover:scale-[1.05]'
                  src={aboutItems[0]?.aboutBannerThree}
                  alt={aboutItems[0]?.aboutBannerAlt}
                />
              </div>
            </div>
            <div className='col-span-4'>
              <div className='single-img overflow-hidden'>
                <img
                  className='block w-full transition-all duration-500 hover:scale-[1.05]'
                  src={aboutItems[0]?.aboutBannerFour}
                  alt={aboutItems[0]?.aboutBannerAlt}
                />
              </div>
            </div>
            <div className='col-span-8'>
              <div className='single-img overflow-hidden'>
                <img
                  className='block w-full transition-all duration-500 hover:scale-[1.05]'
                  src={aboutItems[0]?.aboutBannerFive}
                  alt={aboutItems[0]?.aboutBannerAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='address pt-[60px]'>
        <div className='container'>
          <div className='grid grid-cols-12 gap-x-[30px] max-sm:gap-y-[30px]'>
            <div className='col-span-12 lm:col-span-7'>
              <h2 className='text-[30px]'>{aboutItems[0]?.addressTitleOne}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutItems[0]?.addressDescOne
                }}
              />
            </div>
            <div className='col-span-12 lm:col-span-5'>
              <h2 className='text-[30px]'>{aboutItems[0]?.addressTitleTwo}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutItems[0]?.addressDescTwo
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutUs.propTypes = {
  aboutItems: PropTypes.instanceOf(Object).isRequired
}
export default AboutUs
