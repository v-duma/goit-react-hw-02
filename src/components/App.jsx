import { useState } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { useEffect } from "react";
const App = () => {
  const [options, setOptions] = useState(() => {
    const currentOptions = localStorage.getItem("option");
    if (currentOptions) {
      return JSON.parse(currentOptions);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });
  useEffect(() => {
    localStorage.setItem("option", JSON.stringify(options));
  }, [options]);

  const updateGood = () => {
    setOptions({
      ...options,
      good: options.good + 1,
    });
  };

  const updateNeutral = () => {
    setOptions({
      ...options,
      neutral: options.neutral + 1,
    });
  };

  const updateBad = () => {
    setOptions({
      ...options,
      bad: options.bad + 1,
    });
  };

  const updateReset = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = options.good + options.neutral + options.bad;
  return (
    <>
      <Description />
      <Options
        updateGood={updateGood}
        updateNeutral={updateNeutral}
        updateBad={updateBad}
        updateReset={updateReset}
        totalFeedback={totalFeedback}
      />
      <Feedback
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        totalFeedback={totalFeedback}
      />
    </>
  );
};

export default App;
