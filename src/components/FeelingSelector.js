const FeelingButton = ({ setFeeling, value }) => {
	return <button onClick={() => setFeeling(value)}>{value}</button>;
};

const FeelingSelector = ({ feeling, setFeeling }) => {
	return <div>
        <h1>How are you doing today</h1>
        <div>
          <FeelingButton onClick={setFeeling} value={"Very Happy"} />
          <FeelingButton onClick={setFeeling} value={"Happy"} />
          <FeelingButton onClick={setFeeling} value={"Mediocre"} />
          <FeelingButton onClick={setFeeling} value={"Sad"} />
          <FeelingButton onClick={setFeeling} value={"Very Sad"} />
        </div>
      </div>;
};

export default FeelingSelector;