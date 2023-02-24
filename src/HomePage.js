import React, { useEffect, useState } from "react";

import axios from "axios";
function HomePage() {
  const [prodouctData, setData] = useState();
  useEffect(() => {
    if (!Object.keys(prodouctData).length) {
      axios.get("https://dummyjson.com/products").then((res) => {
        setData(res.data[0].products);
        localStorage.setItem("productData", JSON.stringify(res.data));
      });
    }
  }, [setData]);
  console.log(prodouctData);

  return (
    <div>
      <div>
        {Object.keys(prodouctData).length &&
          prodouctData.map((items) => <div>hello</div>)}
      </div>
      4
    </div>
  );
}

export default HomePage;
