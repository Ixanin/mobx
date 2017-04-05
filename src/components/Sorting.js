import React from 'react'


const Sorting = ({ onSortClick }) => {
    const handleClick = () => {
        onSortClick()
    };

    return (
            <button onClick={ handleClick }>
                sortby
            </button>
    )
};

export default Sorting