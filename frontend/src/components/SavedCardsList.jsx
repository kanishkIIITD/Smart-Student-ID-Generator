import React from "react";

const SavedCardsList = ({ savedCards, onSelect }) => {
  return (
    <div className="mt-4 mx-auto flex flex-col items-center max-w-full mb-4">
      <h2 className="text-lg font-bold mb-2">Saved Cards</h2>
      {savedCards.length === 0 ? (
        <p>No saved cards yet.</p>
      ) : (
        <ul className="space-y-2 grid grid-cols-4 gap-5 items-center justify-center">
          {savedCards.map((card, index) => (
            <li
              key={index}
              className="border p-2 rounded cursor-pointer hover:bg-gray-700  "
              onClick={() => onSelect(card)}
            >
              {card.name} ({card.rollNumber}) - Class {card.classDivision}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCardsList;
