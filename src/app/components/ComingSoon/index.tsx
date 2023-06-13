import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import * as IoIcon from 'react-icons/io5'
import CountDownTwo from '../CountDown/index-2'

function ComingSoon({ comingSoonItems }) {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer = () => {
    const countDownDate = new Date('February 01,2023 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        //   Stop timer
        clearInterval(interval.current)
      } else {
        //   Update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })
  return (
    <div className='coming-soon border-b border-[#ededed] pb-[50px] pt-[35px] md:pb-[80px] md:pt-[65px] lg:pb-[100px] lg:pt-[85px] xl:pb-[120px] xl:pt-[105px]'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-9 lg:col-span-6'>
            <h2 className='mb-[20px] text-[34px] leading-[1.1] lm:text-[60px]'>
              {comingSoonItems[0]?.title}
            </h2>
            <p className='mb-[60px] lg:max-w-[530px]'>
              {comingSoonItems[0]?.desc}
            </p>
            <h3 className='mb-[30px] text-[16px] lm:text-[18px]'>
              {comingSoonItems[0]?.countTitle}
            </h3>
            <CountDownTwo
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
            <div className='social-link flex items-center pt-[60px]'>
              <h2 className='pr-[45px] text-[15px] font-normal lm:text-[16px] md:pr-[65px]'>
                {comingSoonItems[0]?.socialTitle}
              </h2>
              <ul className='flex'>
                {comingSoonItems[0]?.socialList?.map(items => {
                  const Social = IoIcon[items.socialIcon]
                  return (
                    <li className='mr-[25px] last:mr-0' key={items.id}>
                      <Link
                        href={items?.path}
                        className='transition-all hover:text-primary'
                      >
                        <Social />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ComingSoon.propTypes = {
  comingSoonItems: PropTypes.instanceOf(Object).isRequired
}

export default ComingSoon
