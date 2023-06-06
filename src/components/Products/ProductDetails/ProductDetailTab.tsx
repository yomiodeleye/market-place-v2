import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdPlayArrow, MdOutlineStarPurple500 } from 'react-icons/md';

function ProductDetailTab({ product, productDetailTabItems }) {
    // Product Detail Tab
    const [productDetailTabState, setProductDetailTabState] = useState(1);
    const productDetailTab = (index) => {
        setProductDetailTabState(index);
    };
    return (
        <div className="product-detail-tab pt-[95px]">
            <div className="container">
                <ul className="product-detail-tab-menu flex max-sm:flex-wrap border-b border-[#dddddd] pb-[20px]">
                    {productDetailTabItems[0]?.tabMenuItems?.map(
                        (tabMenuItem) => (
                            <li
                                key={tabMenuItem?.id}
                                className={`${
                                    productDetailTabState ===
                                    tabMenuItem?.tabStateNumber
                                        ? `${tabMenuItem?.tabMenuItemCName} text-primary active`
                                        : `${tabMenuItem?.tabMenuItemCName}`
                                } font-medium transition-all hover:text-primary relative flex] ${
                                    tabMenuItem?.separatorCName
                                }`}
                                onClick={() =>
                                    productDetailTab(
                                        tabMenuItem?.tabStateNumber
                                    )
                                }
                            >
                                <span>{tabMenuItem?.name}</span>
                            </li>
                        )
                    )}
                </ul>
                <div className="product-detail-content">
                    <div
                        className={
                            productDetailTabState === 1
                                ? `tab-style-common description active`
                                : `tab-style-common description`
                        }
                    >
                        <div className="description-wrap border-b border-[#dddddd] py-[30px]">
                            <div className="grid grid-cols-12 lm:gap-x-[30px] max-sm:gap-y-[30px]">
                                <div className="lm:col-span-7 col-span-12 self-center">
                                    <div>
                                        <h2 className="text-[24px] mb-[10px]">
                                            {
                                                productDetailTabItems[0]
                                                    ?.descriptionTitle
                                            }
                                        </h2>
                                        <p>
                                            {
                                                productDetailTabItems[0]
                                                    ?.descriptionExcerpt
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="lm:col-span-5 col-span-12">
                                    <img
                                        className="w-full"
                                        src={`/images/products/${product?.slug}/${product?.mdImage}`}
                                        alt={product?.altImage}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="description-wrap border-b border-[#dddddd] py-[30px]">
                            <div className="grid grid-cols-12 lm:gap-x-[30px] max-sm:gap-y-[30px]">
                                <div className="lm:col-span-7 col-span-12 self-center">
                                    <div>
                                        <h2 className="text-[24px] mb-[10px]">
                                            {
                                                productDetailTabItems[0]
                                                    ?.featureTitle
                                            }
                                        </h2>
                                        <ul className="features-list">
                                            {productDetailTabItems[0]?.featuresList?.map(
                                                (featureList) => (
                                                    <li
                                                        className="mb-[5px] last:mb-0"
                                                        key={featureList?.id}
                                                    >
                                                        <span className="flex items-center cursor-pointer transition-all hover:text-primary">
                                                            <MdPlayArrow className="mr-[10px]" />
                                                            {featureList?.name}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="lm:col-span-5 col-span-12">
                                    <img
                                        className="w-full"
                                        src={`/images/products/${product?.slug}/${product?.mdImage}`}
                                        alt={product?.altImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            productDetailTabState === 2
                                ? `tab-style-common additional-information active`
                                : `tab-style-common additional-information`
                        }
                    >
                        <div className="overflow-x-auto relative pt-[25px]">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr>
                                        {productDetailTabItems[0]?.infoThList?.map(
                                            (thData) => (
                                                <th
                                                    key={thData.id}
                                                    scope="row"
                                                    className="pb-4 pr-6 text-gray-900 whitespace-nowrap text-[16px]"
                                                >
                                                    <span className="font-bold">
                                                        {thData.infoThName}
                                                    </span>
                                                    <span className="font-normal ml-[5px]">
                                                        {thData.infoThValue}
                                                    </span>
                                                </th>
                                            )
                                        )}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div
                        className={
                            productDetailTabState === 3
                                ? `tab-style-common reviews active`
                                : `tab-style-common reviews`
                        }
                    >
                        <div className="reviews-wrap pt-[25px]">
                            <h2 className="text-[26px]">
                                {productDetailTabItems[0]?.reviewHeading}
                            </h2>
                            <span className="block mb-[10px]">
                                {productDetailTabItems[0]?.reviewTitle}
                            </span>
                            <ul className="product-rating flex">
                                {productDetailTabItems[0]?.ratingLists?.map(
                                    (ratingList) => (
                                        <li key={ratingList.id}>
                                            <MdOutlineStarPurple500 className="text-[#f5a623]" />
                                        </li>
                                    )
                                )}
                            </ul>
                            <form className="pt-[25px]">
                                <div className="single-field mb-[20px]">
                                    <label
                                        htmlFor="your-review"
                                        className="block mb-[5px]"
                                    >
                                        Your review *
                                    </label>
                                    <textarea
                                        className="textarea-field border border-[#cfcfcf] outline-none w-full h-[140px] p-[10px]"
                                        id="your-review"
                                        type="text"
                                    />
                                </div>
                                <div className="group-field flex">
                                    <div className="single-field w-full mr-[20px]">
                                        <label
                                            htmlFor="reviewer-name"
                                            className="block mb-[5px]"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            className="input-field border border-[#cfcfcf] outline-none w-full h-[40px] p-[10px]"
                                            id="reviewer-name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="single-field w-full">
                                        <label
                                            htmlFor="reviewer-email"
                                            className="block mb-[5px]"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            className="input-field border border-[#cfcfcf] outline-none w-full h-[40px] p-[10px]"
                                            id="reviewer-email"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="submit-field mt-[35px]">
                                    <input
                                        type="submit"
                                        value="submit"
                                        className="bg-black text-white cursor-pointer capitalize p-[4px_28px]"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductDetailTab.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    productDetailTabItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetailTab;
