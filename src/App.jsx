import "./App.css";
import CheckBox from "./components/CheckBox";
import StarRating from "./components/StarRating";
import User from "./components/User";

function App() {
  return (
    <>
      <CheckBox />
      <br /> <br />
      <StarRating totalStars={5} />
      <br />
      <br />
      <User />
    </>
  );
}

export default App;
