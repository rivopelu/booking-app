import React from 'react'

const BtnComp = ({ title, onClick, className, ...rest }) => {
    return (
        <button className={`BtnComp ${className}`} onClick={onClick} {...rest}>{title}</button>
    )
}

export default BtnComp