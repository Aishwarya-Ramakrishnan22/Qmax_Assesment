import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({onSearch,data}) => {
  const [inputSearch, setInputSearch] = useState(JSON.parse(localStorage.getItem("inputSearch")) || "");;
  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("inputSearch", JSON.stringify(inputSearch));
  }, [inputSearch]);
  const userValue = (e) => {
    const temp = e.target.value
    setInputSearch(temp)
    const results = customFuzzySearch(temp, data, 'name');
    onSearch(results);
  };


    // Custom fuzzy search function
    const customFuzzySearch = (query, data) => {
      query = query.toLowerCase();
      return data.filter(item => {
        const title = item.title ? item.title.toLowerCase() : '';

        
        // Check if the query matches in either title or body
        if (title.includes(query)) {
          return true;
        }
        
        return false;
      });
    };
    

  return (
    <div style={{ margin: "10px" }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={inputSearch}
        onChange={userValue}
        InputProps={{
          endAdornment: (
            <SearchIcon
              style={{ cursor: 'pointer' }}
              // onClick={handleSearch}
            />
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
