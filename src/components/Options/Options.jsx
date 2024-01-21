export const Options = ({
  updateGood,
  updateNeutral,
  updateBad,
  updateReset,
  totalFeedback,
}) => {
  return (
    <div>
      <button onClick={updateGood}>Good</button>
      <button onClick={updateNeutral}>Neutral</button>
      <button onClick={updateBad}>Bad</button>
      {totalFeedback > 0 && <button onClick={updateReset}>Reset</button>}
    </div>
  );
};
