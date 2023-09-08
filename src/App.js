import React, { useState } from "react";
import { useEffect } from "react";
import CardContext from "./Component/CardContext";
import SearchBar from "./Component/SearchBar";

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);;
  const [searchResults, setSearchResults] = useState(JSON.parse(localStorage.getItem("searchResults")) || []);;

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Save searchResults to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  }, [searchResults]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deletePost = (id) => {
    const updatedData = data.filter((e) => e.id !== id);
    setData(updatedData);
  };
  const handleSearch = (results) => {
    // Update the search results in the App.js component
    setSearchResults(results);
  };
  return (
    <div>
    <div>
      <SearchBar data={data} onSearch={handleSearch}/>
    </div>
    {searchResults.length > 0 ? (
        // Render search results if there are any
        searchResults.map((e) => (
          <div key={e.id}>
            <CardContext id={e.id} title={e.title} body={e.body} deletePost={() => deletePost(e.id)} />
          </div>
        ))
      ) : (
        // Render the full data set if there are no search results
        data.map((e) => (
          <div key={e.id}>
            <CardContext id={e.id} title={e.title} body={e.body} deletePost={() => deletePost(e.id)} />
          
          </div>
        ))
      )}

    </div>  
  );
};

export default App;
