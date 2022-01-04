import React from "react";
import { Button, Typography } from "antd";

function Home() {
  return (
    <div>
      <div style={{ width: "100%", height: 200, backgroundColor: "lightgrey", marginBottom: -40 }}></div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: 80, height: 80, margin: "0px 12px", backgroundColor: "red" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ marginTop: 12, font: "bold 20px NanumGothic" }}>Jangyoun Lee</div>
          <div style={{ marginTop: 10, font: "bold 20px NanumGothic" }}>jangyounc@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
