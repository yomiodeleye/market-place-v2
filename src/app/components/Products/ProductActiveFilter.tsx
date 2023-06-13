import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

import { filterActions } from '../../../store/product-filter/filter-slice'

function ProductActiveFilter() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  return (
    <ul className='active-filter-list -mb-[10px] flex flex-wrap items-center pb-[20px]'>
      {filter.filterData.map(item => (
        <li className='mb-[10px] mr-[10px]' key={item.key}>
          <button
            type='button'
            className='flex items-center rounded-[20px] bg-[#e8e8e8] px-[10px]  text-[14px] transition-all hover:bg-black hover:text-white'
          >
            <span className='mr-[5px]'>{item.title}</span>
            <IoCloseOutline
              onClick={() =>
                dispatch(
                  filterActions.removeFilter({
                    key: item.key
                  })
                )
              }
            />
          </button>
        </li>
      ))}

      {filter.filterData.length !== 0 && (
        <li className='mb-[10px]'>
          <button
            onClick={() => dispatch(filterActions.clearAll())}
            type='button'
            className='clear-btn hover:text-primary text-[14px] transition-all'
          >
            Clear All
          </button>
        </li>
      )}
    </ul>
  )
}

export default ProductActiveFilter
