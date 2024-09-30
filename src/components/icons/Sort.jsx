import React from "react";
import classNames from "classnames";

function Sort({ className, primaryColor, shadeColor }) {
    const compClass = classNames({
        "h-full": !className,
        [`${className}`]: className,
    });
    const primaryColorClass = classNames({
        "fill-blue-600": !primaryColor,
        [`${primaryColor}`]: primaryColor,
    });
    const shadeColorClass = classNames({
        "fill-blue-300": !shadeColor,
        [`${shadeColor}`]: shadeColor,
    });
    return (
        <>
            {/* prettier-ignore */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={compClass}>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M4 6C4 5.44772 4.44772 5 5 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H5C4.44772 7 4 6.55228 4 6Z"/>
                <path className={shadeColorClass} fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5C4.44772 13 4 12.5523 4 12Z"/>
                <path className={primaryColorClass} fillRule="evenodd" clipRule="evenodd" d="M4 18C4 17.4477 4.44772 17 5 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H5C4.44772 19 4 18.5523 4 18Z"/>
            </svg>
        </>
    );
}

export default Sort;
