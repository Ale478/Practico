import { useState } from "react";
import "./App.css";
import BarChart from "./componentes/BarChart"
import { Label } from "./Data";
import LineChart from "./componentes/LineChart";
import PieChart from "./componentes/PieChart";


function App() {
  const [userData, setUserData] = useState({
    labels: Label.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Label.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "purple",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
