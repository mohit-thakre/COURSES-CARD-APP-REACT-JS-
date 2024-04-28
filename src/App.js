import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import { filterData, apiUrl } from "./data";
import Buttons from "./components/Buttons";
import Courses from "./components/Courses";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch (error) {
        toast.error("something went wrong");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-red-300 min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Heading />
          <Buttons
            button={filterData}
            category={category}
            setcategory={setcategory}
          />
          <Courses data={data} category={category} />
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default App;
