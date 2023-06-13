import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';

function Error404({ errorItems }) {
    return (
        <div className="error-404 border-b border-[#ededed] pt-[180px] pb-[180px]">
            <div className="container">
                <div className="content flex flex-col items-center">
                    <img
                        src={errorItems[0]?.image}
                        alt={errorItems[0]?.imageAlt}
                    />
                    <h1 className="mb-[10px]">{errorItems[0]?.title}</h1>
                    {errorItems[0]?.descInfo?.map((item) => (
                        <p
                            className="text-[18px] leading-[31px] mb-[45px]"
                            key={item.id}
                        >
                            {item.desc}
                            <Link
                                href={item.path}
                                className="text-primary border-b border-primary ml-[5px]"
                            >
                                {item.pathText}
                            </Link>
                        </p>
                    ))}

                    <form>
                        <div className="input-field relative w-[400px]">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search..."
                                className="bg-transparent border border-[rgba(0,0,0,.25)] outline-none w-full p-[13px_65px_13px_15px] focus-visible:border-primary"
                            />
                            <button
                                type="submit"
                                className="absolute top-1/2 -translate-y-1/2 right-[20px] text-2xl"
                            >
                                <IoSearchOutline />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Error404.propTypes = {
    errorItems: PropTypes.instanceOf(Array).isRequired,
};

export default Error404;
