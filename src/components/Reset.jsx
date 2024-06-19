import React from 'react';

const Reset = ({ onClick }) => {
    return (
        <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
            onClick={onClick}
        >
            Reset Game
        </button>
    );
};

export default Reset;
