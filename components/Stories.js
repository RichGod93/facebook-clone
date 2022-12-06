import React from "react";
import StoryCard from "../components/StoryCard";

const stories = [
  {
    name: "RichGod Usen",
    src: "https://bit.ly/3ODCzcO",
    profile: "https://bit.ly/39dlo2n",
  },
  {
    name: "Angela Mist",
    src: "https://bit.ly/3IaYExg",
    profile: "https://bit.ly/3ugUSwz",
  },
  {
    name: "Derek Marcus",
    src: "https://bit.ly/3ODC16K",
    profile: "https://bit.ly/3OCq3dM",
  },
  {
    name: "Lisa Joe",
    src: "https://bit.ly/3I4W0Jk",
    profile: "https://bit.ly/3ODZvIX",
  },
  {
    name: "Michael Mill",
    src: "https://bit.ly/3bIPfRk",
    profile: "https://bit.ly/3AiLe05",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
