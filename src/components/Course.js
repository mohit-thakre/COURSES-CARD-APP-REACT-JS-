import React, { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
const Course = ({ data, likedcourse, setlikedcourse }) => {
  const [more, setmore] = useState(false);
  const [like, setlike] = useState(false);
  function handleread() {
    setmore(!more);
  }
  function handlelike() {
    setlike(!like);
  }

  function handlelikeclick() {
    if (likedcourse.includes(data.id)) {
      setlikedcourse((prev) => prev.filter((cid) => cid !== data.id));
      toast.info("Course unliked");
    } else {
      setlikedcourse([...likedcourse, data.id]);
      toast.success("Course liked");
    }
  }
  return (
    <div>
      <div className="w-[300px] p-2 h-auto p3 bg-yellow-500 m-4 relative">
        <img src={data.image.url} alt={data.image.alt}></img>

        <h2 className=" font-bold text-lg text-center">
          {data.title}
          <span onClick={handlelikeclick}>
            <span onClick={handlelike}>
              {like ? (
                <FcLike className="mx-auto text-4xl" />
              ) : (
                <FcLikePlaceholder className="mx-auto text-4xl" />
              )}
            </span>
          </span>
        </h2>
        <p className="font-semibold">
          {more ? data.description : `${data.description.substr(0, 50)}...`}
          <span className=" text-blue-500 font-bold" onClick={handleread}>
            {more ? "ReadLess" : "ReadMore"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Course;
