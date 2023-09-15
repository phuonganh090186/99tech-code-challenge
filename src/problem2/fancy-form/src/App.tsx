import { useEffect, useState } from "react";
import "./App.css";
import { Currency } from "./types";
import FancyForm from "./components/FancyForm/component";

function App() {
  const [currencyList, setCurrencyList] = useState<Currency[]>([]);

  useEffect(() => {
    try {
      fetch("https://interview.switcheo.com/prices.json").then(
        (res: Response) => {
          res.json().then((json: Currency[]) => {
            setCurrencyList(json);
          });
        }
      );
    } catch (error) {
      setCurrencyList([]);
    }
  }, []);

  return <FancyForm currencyList={currencyList} />;
}

export default App;
