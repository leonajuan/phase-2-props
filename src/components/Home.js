import React from "react";

function Home({data}) {
  return (
    <div id="home">
      <h1 style={{ color: data.color }}>
        {data.name} is a Web Developer from {data.city}
      </h1>
    </div>
  );
}

export default Home;
