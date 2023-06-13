'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoArrowForwardOutline } from 'react-icons/io5'
import CountDown from '@/components/CountDown'

interface OfferCollectionProps {
  offerColection: any
}

function OfferCollection({ offerColection }) {
  const secondaryButton =
    'inline-flex items-center bg-secondary text-white leading-[38px] text-[15px] h-[38px] px-[32px] transition-all hover:bg-[#222222]'

  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)

  const startTimer = () => {
    const countDownDate = new Date('December 01,2023 ').getTime()

    const interval = setInterval(() => {
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
    <div className='offer-colection pt-[35px] md:pt-[60px] lg:pt-[80px] xl:pt-[130px]'>
      <div className='container-fluid px-[15px]'>
        <div className='flex h-[635px] items-center bg-offer-colection bg-cover bg-center bg-no-repeat'>
          <div className='container'>
            <div className='grid grid-cols-12'>
              <div className='col-span-12 md:col-span-7'>
                <div className='content'>
                  <h2
                    className='offer-colection-title relative mb-[30px] pb-[10px] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[70px] after:bg-primary'
                    dangerouslySetInnerHTML={{
                      __html: offerColection[0].title
                    }}
                  />
                  <p className='mb-[50px]'>{offerColection[0].desc}</p>
                  <CountDown
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                  />
                  <div className='mt-[60px]'>
                    <Link href='/' className={secondaryButton}>
                      Shop Now
                      <IoArrowForwardOutline className='ml-[5px] text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCollection
