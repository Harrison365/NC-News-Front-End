import "./App.css";
import { Routes, Route } from "react-router-dom";
import Banner from "./Tags/Banner"; //import all tags
import ArticleList from "./Tags/ArticleList";
import TopicButtons from "./Tags/TopicButtons";
import IndividualArticle from "./Tags/IndividualArticle";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./Tags/ErrorPage";

function App() {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  return (
    <div className="App">
      <section id="topLine">
        <Link to="/">
          <Banner />
        </Link>
        {/* Banner Tag */}
        <TopicButtons />
        {/* Navigation buttons */}
        <br />
      </section>

      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              sortBy={sortBy}
              setSortBy={setSortBy}
              order={order}
              setOrder={setOrder}
            />
          }
        />
        <Route
          path="/topics/:topic"
          element={
            <ArticleList
              sortBy={sortBy}
              setSortBy={setSortBy}
              order={order}
              setOrder={setOrder}
            />
          }
        />
        <Route path="/article/:article_id" element={<IndividualArticle />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
