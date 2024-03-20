import React from 'react';

const sortOptions = [
    { criteria: "total", label: "Twubric Score" },
    { criteria: "friends", label: "Friends" },
    { criteria: "influence", label: "Influence" },
    { criteria: "chirpiness", label: "Chirpiness" },
];

function SortButtons({ sortBy, previousSortValue, handleSort }) {
    return (
        <div className="sort-buttons text-center">
            <div className="sort-options">
                {sortOptions.map((option) => (
                    <button key={option.criteria}
                        className={`btn btn-primary sort-btn m-2 ${sortBy === option.criteria && 'active'}`}
                        onClick={() => handleSort(option.criteria)}
                    >
                        {option.label}{' '}
                        {sortBy === option.criteria && (previousSortValue === null  ? '▼' : previousSortValue === option.criteria ? '▲' : '▼')}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SortButtons;
