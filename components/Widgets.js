import React from "react";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";
const contacts = [
  { src: "https://bit.ly/3ugUSwz", name: "Maria David" },
  { src: "https://bit.ly/3R0vF30", name: "Paul Fisher" },
  { src: "https://bit.ly/3NKM7kZ", name: "Deborah Sid" },
  { src: "https://bit.ly/3AiLe05", name: "Jayson Freeman" },
  { src: "https://bit.ly/3OI9e0S", name: "Richard Gates" },
  { src: "https://bit.ly/3OZK2CR", name: "Mia Kay" },
  { src: "https://bit.ly/3R4IHwz", name: "William Stark" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2 cursor-pointer">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
