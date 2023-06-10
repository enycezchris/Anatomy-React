import React, { useState, useEffect } from "react";
import axios from "axios";

const Cranium = () => {
  const [cranium, setCranium] = useState([]);
  useEffect(() => {
    const fetchHumanCraniumData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/human/cranium");
        setCranium(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchHumanCraniumData();
  }, []);

  console.log("cranium", cranium);
  return (
    <>
      {cranium.map((data) => {
        return (
          <ul key={data.id}>
            <li>{data.name}</li>
            <li>{data.description}</li>
            <img src={data.anteriorView} alt="" />
            <img src={data.posteriorView} alt="" />
          </ul>
        );
      })}
    </>
  );
};

export default Cranium;
