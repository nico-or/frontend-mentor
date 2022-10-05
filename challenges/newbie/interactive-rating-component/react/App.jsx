const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <FullScreen>
      <Card />
    </FullScreen>
  );
}

function FullScreen({ children }) {
  return (
    <div className="full-screen flex flex-column justify-center align-center">
      {children}
    </div>
  );
}

function Card() {
  const [rating, setRating] = React.useState(null);
  const [isSubmited, setSubmited] = React.useState(false);

  return (
    <div className="card">
      {isSubmited ? (
        <ThankYouView rating={rating} />
      ) : (
        <RatingView handleSubmit={setSubmited} handleRating={setRating} />
      )}
    </div>
  );
}

function RatingView({ handleSubmit, handleRating }) {
  const [isRated, setRated] = React.useState(false);

  return (
    <div className="rank-us flex flex-column">
      <div className="round flex justify-center align-center">
        <img src="./images/icon-star.svg" alt="star-icon" ariaHidden={true} />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingScale
        handleRating={(rating) => {
          setRated(true);
          handleRating(rating);
        }}
      />
      <button
        disabled={!isRated}
        onClick={() => {
          handleSubmit(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}

function RatingScale({ handleRating }) {
  const ratings = [1, 2, 3, 4, 5];
  const [isSelected, setSelected] = React.useState(null);

  return (
    <div className="rating-form flex">
      {ratings.map((rating) => (
        <RatingElement
          key={rating}
          value={rating}
          isSelected={rating === isSelected}
          handleSelected={setSelected}
          handleRating={handleRating}
        />
      ))}
    </div>
  );
}

function RatingElement({ value, handleRating, isSelected, handleSelected }) {
  return (
    <div
      className={`round flex justify-center align-center ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => {
        console.log(value);
        handleRating(value);
        handleSelected(value);
      }}
    >
      {value}
    </div>
  );
}

function ThankYouView({ rating }) {
  return (
    <div className="thank-you flex flex-column align-center text-center">
      <img
        src="./images/illustration-thank-you.svg"
        alt="ilustration"
        ariaHidden={true}
      />
      <p className="text-orange pill">You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
