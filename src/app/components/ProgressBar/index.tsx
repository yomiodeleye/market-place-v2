import PropTypes from 'prop-types';

function ProgressBar({ title, progressText }) {
    return (
        <div className="progress mb-[20px] lg:last:mb-0">
            <div className="flex justify-between mb-[10px]">
                <span className="text-base font-medium text-[#111111] dark:text-white">
                    {title}
                </span>
                <span className="text-sm font-medium text-[#111111] dark:text-white">
                    {progressText}
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-[3px] dark:bg-gray-700">
                <div
                    className="bg-black h-[3px] rounded-full"
                    style={{ width: `${progressText}` }}
                />
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    title: PropTypes.string.isRequired,
    progressText: PropTypes.string.isRequired,
};

export default ProgressBar;
