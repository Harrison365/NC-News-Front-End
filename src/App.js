import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./Tags/Banner"; //import all tags
import ArticleList from "./Tags/ArticleList";
import Coding from "./Tags/Coding";
import Cooking from "./Tags/Cooking";
import Football from "./Tags/Football";
import TopicButtons from "./Tags/TopicButtons";
import IndividualArticle from "./Tags/IndividualArticle";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section>
        <Link to="/">
          <Banner />
        </Link>
        {/* Banner Tag */}
        <TopicButtons />
        {/* Navigation buttons */}
        <br />
      </section>

      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/football" element={<Football />} />
        <Route path="/article/:article_id" element={<IndividualArticle />} />
      </Routes>
    </div>
  );
}

export default App;
