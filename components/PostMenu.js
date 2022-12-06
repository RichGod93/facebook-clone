import { DotsVerticalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";

function PostMenu({ options }) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={handleClick}
            type="button"
            className="inline-flex justify-center rounded-full px-1 py-1 text-md font-medium text-white shadow-sm focus:outline-none bg-blue-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <DotsVerticalIcon className="h-4" />

            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </button>
        </div>
        {showOptions && (
          <div
            className="absolute right-0 mt-2 px-3 w-40 origin-top-right rounded-md bg-white shadow-md hover:bg-gray-100 text-white-500 text-sm focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {options &&
                options.map((option) => (
                  <Link
                    key={option.name}
                    href="/"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    {option}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostMenu;
