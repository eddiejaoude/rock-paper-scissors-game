import React from 'react';

const Buttons: React.FC = (props):JSX.Element => {
    return (
        <>
        <div className="button">{props.children}</div>
        </>
    )
}

export default Buttons;