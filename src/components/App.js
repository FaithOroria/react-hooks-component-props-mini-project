import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"; 
import blogData from "../data/blog"; 


const yourPostsArray = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
]

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About imageSrc={blogData.image} aboutText={blogData.about} />

      <ArticleList posts={yourPostsArray} /> 
    </div>
  );
}

export default App;



