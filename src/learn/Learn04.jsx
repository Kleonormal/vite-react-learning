import "./Learn04.css";

const cities = [
  {
    name: "New York",
    country: "USA",
    forecast: [
      { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-04", temperature: 17, weather: "Sunny" },
      { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 20, weather: "Rain" },
      { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
      { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
      { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
    ],
  },
  {
    name: "London",
    country: "UK",
    forecast: [
      { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
      { date: "2024-04-04", temperature: 14, weather: "Rain" },
      { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 13, weather: "Sunny" },
      { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
      { date: "2024-04-08", temperature: 10, weather: "Rain" },
      { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
    ],
  },
  {
    name: "Tokyo",
    country: "Japan",
    forecast: [
      { date: "2024-04-03", temperature: 20, weather: "Sunny" },
      { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
      { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
      { date: "2024-04-06", temperature: 19, weather: "Rain" },
      { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-08", temperature: 17, weather: "Sunny" },
      { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
    ],
  },

  {
    name: "Sydney",
    country: "Australia",
    forecast: [],
  },

  {
    name: "Beijing",
    country: "China",
  },
];

function Forecast({ value }) {
  if (!value || !value.length) {
    return <p>Can't find any data</p>;
  }
  const listItem = value.map((item, index) => (
    <li key={index}>
      {item.date}
      <span>
        {" "}
        temperature: {item.temperature}℃(
        {item.weather})
      </span>
    </li>
  ));
  return <ul>{listItem}</ul>;
}

function Learn04() {
  const sectionItem = cities.map((item, index) => (
    <section className="city" key={index}>
      <h2>{item.country}</h2>
      <h3>{item.name}</h3>
      <Forecast value={item.forecast} />
    </section>
  ));
  return (
    <main>
      {sectionItem}

      {/* <section className="city">
        <h2>CN</h2>
        <h3>Beijing</h3>
        <p>Can't find any data</p>
      </section> */}
    </main>
  );
}
export default Learn04;
