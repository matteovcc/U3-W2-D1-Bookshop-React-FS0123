import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import "./App.css";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <MyNav brand="EpiBooks Libreria Online" />
      <Welcome />
      <BookList />
      {/* <SingleBook /> */}
      <MyFooter />
    </>
  );
}

export default App;

