import { useState } from 'react'
import Link from 'next/link'
import { IoCaretDownOutline } from 'react-icons/io5'
import { OffcanvasData } from '@/config/offcanvas-data'

interface OffcanvasMenuProp {}

const OffcanvasMenu = () => {
  const [submenuOpenId, setSubmenuOpenId] = useState({})

  const showSubmenuClickHandler = id =>
    setSubmenuOpenId(prevData => ({
      [id.toString()]: !prevData[id.toString()]
    }))

  const [levelTwoOpenId, setLevelTwoOpenId] = useState({})

  const showLevelTwoClickHandler = id =>
    setLevelTwoOpenId(prevData => ({
      [id.toString()]: !prevData[id.toString()]
    }))

  return (
    <ul className='offcanvas-menu-items pt-[75px]'>
      {OffcanvasData.map(item => {
        const { submenu } = item
        return (
          <li
            key={item.id}
            className={`${item.cName}${
              submenuOpenId[item.id.toString()] ? ' active' : ''
            } mb-[15px] last:mb-0`}
          >
            <span
              onClick={
                submenu ? () => showSubmenuClickHandler(item.id) : () => {}
              }
              className={`${
                item?.submenu ? 'menu-expand' : ''
              } flex cursor-pointer items-center justify-between font-medium transition-all hover:text-[#666666]`}
            >
              {item.title}
              <IoCaretDownOutline className='menu-icon' />
            </span>
            {submenu && (
              <ul className='submenu mt-[15px] pl-[10px]'>
                {submenu?.map(submenuItem => (
                  <li
                    key={submenuItem.id}
                    className={`${submenuItem.cName}${
                      levelTwoOpenId[submenuItem.id.toString()] ? ' active' : ''
                    } mb-[15px] last:mb-0`}
                    onClick={
                      submenuItem.levelTwo
                        ? () => showLevelTwoClickHandler(submenuItem.id)
                        : () => {}
                    }
                  >
                    {submenu && !submenuItem.levelTwo && (
                      <Link
                        href={`${submenuItem.link}`}
                        className='flex items-center justify-between transition-all hover:text-[#666666]'
                      >
                        {submenuItem.text}
                      </Link>
                    )}
                    {submenu && submenuItem.levelTwo && (
                      <span className='flex cursor-pointer items-center justify-between font-medium transition-all hover:text-[#666666]'>
                        {submenuItem.text}
                        <IoCaretDownOutline className='sub-icon' />
                      </span>
                    )}
                    {submenuItem.levelTwo && (
                      <ul className='level-two mt-[15px]'>
                        {submenuItem.levelTwo.map(levelTwoItem => (
                          <li
                            key={levelTwoItem.id}
                            className='mb-[5px] last:mb-0'
                          >
                            <Link
                              href={levelTwoItem.link}
                              className='transition-all hover:text-[#666666]'
                            >
                              {levelTwoItem.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default OffcanvasMenu
