const Square = ({ value, onClick }) => {
    return (
        <button
            className="w-24 h-24 border-2 border-gray-500 flex items-center justify-center text-2xl font-bold"
            onClick={onClick}
        >
            {value}
        </button>
    );
};
export default Square;