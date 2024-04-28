import React from "react";

const Buttons = ({ button, setcategory, category }) => {
  function handlecategory(title) {
    setcategory(title);
  }

  return (
    <div className="flex justify-center m-4 flex-wrap">
      {button.map((item, index) => (
        <button
          key={index}
          onClick={() => handlecategory(item.title)}
          className={`${
            category === item.title
              ? "border-4 border-white px-4 py-2 bg-yellow-500 rounded-lg m-2 text-white font-bold"
              : "px-4 py-2 bg-yellow-900 rounded-lg m-2 text-white font-bold"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
