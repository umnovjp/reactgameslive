import React from 'react';
import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.gameData); // original was response.data.data; we pass only gameData to resultList
    console.log(response.data.gameData.players);
    var fullRoster = response.data.gameData.players;
    var rosterArray = Object.values(fullRoster);
    console.log(rosterArray);
    console.log(results) // searchResultContainer does not know what results are, but resultList knows
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy('2021021133');
  }, []);

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over 
      <ResultList results={results} />*/}
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;
