import React from "react";
import Stories from "../components/Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

const Feed = ({ posts }) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-screen-lg lg:max-w-screen-2xl">
        {/* Stories */}
        <Stories />
        {/* InputBox */}
        <InputBox />
        {/* Posts */}
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
