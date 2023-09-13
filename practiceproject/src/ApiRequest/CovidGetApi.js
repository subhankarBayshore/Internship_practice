import { useEffect, useState } from "react";

const CovidGetApi = () => {
  const [covidDetails, setCovidDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("covidDetails :", covidDetails);
  }, [covidDetails]);

  const onCaseDetailsFetchingFunction = async () => {
    //setIsLoading(true);
    const response = await fetch(
      "https://api.covidtracking.com/v1/us/daily.json"
    );
    const data = await response.json();

    const transformedData = data.map((item, index) => {
      return {
        id: index,
        date: item.date,
        states: item.states,
        positive: item.positive,
        negative: item.negative,
        inIcuCurrently: item.inIcuCurrently,
        onVentilatorCurrently: item.onVentilatorCurrently,
        death: item.death,
        lastModified: item.lastModified,
        deathIncrease: item.deathIncrease,
        hospitalizedIncrease: item.hospitalizedIncrease,
        positiveIncrease: item.positiveIncrease,
      };
    });

    setCovidDetails(transformedData);
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={onCaseDetailsFetchingFunction}>
        Fetch Covid Details
      </button>
      {covidDetails.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <li>
              <p>Date: {item.date}</p>
              <p>Positive Cases: {item.positive}</p>
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default CovidGetApi;
