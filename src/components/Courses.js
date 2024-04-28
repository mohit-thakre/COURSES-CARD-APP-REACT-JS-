import React, { useState } from "react";
import Course from "./Course";

const Courses = ({ data, category }) => {
  const [likedcourse, setlikedcourse] = useState([]);

  let courses = [];

  if (category === "All") {
    courses = Object.values(data).flat();
  } else {
    courses = data[category].flat();
  }

  return (
    <div className="flex justify-center items-center flex-wrap w-[70%] gap-4 mx-auto">
      {courses.map((item) => {
        return (
          <Course
            key={item.id}
            data={item}
            likedcourse={likedcourse}
            setlikedcourse={setlikedcourse}
          />
        );
      })}
    </div>
  );
};

export default Courses;
