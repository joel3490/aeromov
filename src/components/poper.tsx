import React, { useState, useRef } from 'react';
import { usePopper } from 'react-popper';

const Popover = () => {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);
    const popoverRef = useRef(null);

    const { styles, attributes } = usePopper(buttonRef.current, popoverRef.current, {
        placement: 'left',
    });

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={handleToggle}
                type="button"
                className="text-white mb-3 me-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Left popover
            </button>
            {visible && (
                <div
                    ref={popoverRef}
                    style={styles.popper}
                    {...attributes.popper}
                    className="absolute z-10 inline-block w-64 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                >
                    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Popover left</h3>
                    </div>
                    <div className="px-3 py-2">
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                    </div>
                    <div data-popper-arrow className="arrow" />
                </div>
            )}
        </div>
    );
};

export default Popover;
