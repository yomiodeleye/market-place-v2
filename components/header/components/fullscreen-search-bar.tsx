import {IoCloseOutline, IoSearchOutline} from 'react-icons/io5';
import {categoryList} from "@/config/header-menu";

interface FullscreenSearchBarProp {
  fullscreenSearch: boolean
  showFullscreenSearch: () => void
}

const FullscreenSearchBar = ({showFullscreenSearch, fullscreenSearch}: FullscreenSearchBarProp) => {
  return (
    <div
      className={
        fullscreenSearch
          ? 'fullscreen-search active'
          : 'fullscreen-search'
      }
    >
      <div className="homebox-container mx-auto xl:w-[1170px]">
        <div className="searchbar-top flex justify-between">
          <h2 className="text-[26px]">Search</h2>
          <IoCloseOutline
            className="cursor-pointer text-[32px] text-[#212121] transition-all hover:text-primary"
            onClick={showFullscreenSearch}
          />
        </div>
        <form className="filter-form pt-[60px]">
          <div className="inner-form mx-auto md:w-[710px] lg:w-[875px]">
            <div className="product-category-list flex flex-wrap justify-center">
              {categoryList?.map((item) => (
                <button
                  key={item.id}
                  className="mr-[15px] last:mr-0 lm:mr-[40px]"
                  type="button"
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="single-field relative pt-[65px]">
              <input
                type="search"
                className="input-field h-[40px] w-full border-0 border-b p-[15px_50px_15px_0] outline-none"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-[15px] top-auto h-[40px] text-[20px] transition-all hover:text-primary"
              >
                <IoSearchOutline/>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FullscreenSearchBar
