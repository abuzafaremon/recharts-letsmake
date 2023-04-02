import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./App.css";

function App() {
  const data = [
    {
      name: "Jan",
      buy: 4000,
      sell: 2400,
      revenue: 240,
    },
    {
      name: "Feb",
      buy: 3000,
      sell: 1398,
      revenue: 221,
    },
    {
      name: "March",
      buy: 2000,
      sell: 9800,
      revenue: 229,
    },
    {
      name: "April",
      buy: 2780,
      sell: 3908,
      revenue: 260,
    },
    {
      name: "May",
      buy: 1890,
      sell: 4800,
      revenue: 218,
    },
    {
      name: "June",
      buy: 2390,
      sell: 3800,
      revenue: 250,
    },
    {
      name: "July",
      buy: 3490,
      sell: 4300,
      revenue: 250,
    },
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotoneY"
          dataKey="sell"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotoneY" dataKey="buy" stroke="#82ca9d" />
        <Line type="monotoneY" dataKey="revenue" stroke="#f66" />
      </LineChart>

      <br />
      <br />
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="buy" fill="#82ca9d" />
        <Bar dataKey="revenue" fill="#f55" />
      </BarChart>
      <br />
      <PieChart width={500} height={500}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}

export default App;
