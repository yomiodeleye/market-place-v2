'use client'

import ReactDom from 'react-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { ReactNode } from 'react'

interface QuickViewProps {
  children?: ReactNode
  open?: boolean
  onClose?: () => void
}

function QuickView({ children, open, onClose }: QuickViewProps) {
  const quickview =
    'fixed flex top-0 left-0 w-full h-[calc(100%+90px)] overflow-y-auto z-50'
  const quickviewInner =
    'relative bg-white xl:w-[1170px] w-[calc(100%-60px)] m-auto before:bg-black before:fixed before:opacity-50 before:pointer-events-none before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]'

  if (!open) return null
  if (open) {
    // @ts-ignore
    return ReactDom.createPortal(
      <div className={quickview} onClick={onClose}>
        <div className={quickviewInner} onClick={(e) => e.stopPropagation()}>
          <div
            className="quickview-top absolute right-[20px] top-[20px] z-[1]"
            onClick={onClose}
          >
            <IoCloseOutline className="cursor-pointer text-[32px]" />
          </div>
          {children}
        </div>
      </div>,
      // @ts-ignore
      document.getElementById('quickview-root'),
    )
  }
}

export default QuickView
