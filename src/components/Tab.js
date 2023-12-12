import React, { useState } from "react";

const Tab = ({ data }) => {
  const [desc, setDesc] = useState(data[0].content);
  console.log(data);

  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return (
            <li onClick={() => setDesc(item.content)} key={index}>
              {item.title}
            </li>
          );
        })}
      </ul>

      <p>{desc}</p>
    </div>
  );
};

export default Tab;
