import "./App.css";
import Banner from "./Tags/Banner"; //import all tags
import Articles from "./Tags/ArticleList";

function App() {
  return (
    <div className="App">
      <Banner />
      {/* Banner Tag */}
      <Articles />
      {/* Article Tag */}
    </div>
  );
}

export default App;
