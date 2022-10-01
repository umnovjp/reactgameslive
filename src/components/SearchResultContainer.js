import React from 'react';
import { useState, useEffect } from 'react';
import ResultList from './ResultList';
// Import our search method
import search from '../utils/API';
import PlayerList from './PlayerList';
const rosterArray = [];
const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]); //why is it an array in brackets?

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    //setResults(response.data.liveData.boxscore.teams.home.players); // original was response.data.data; we pass only gameData to resultList
    console.log(response.data.liveData.boxscore.teams.home.players);
    var fullRoster = response.data.liveData.boxscore.teams.home.players;
    var rosterArray = Object.values(fullRoster);
    console.log(rosterArray);
    setResults(rosterArray)
     };
  
  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy('2022010047');
  }, []);
  console.log('5', rosterArray[2])
  return (
    <div>
      {/* Pass our results to the ResultsList component to map over 
      <ResultList results={results} />*/}
      <ResultList results={results} />
     <PlayerList results = {results} />
      <li>list in search</li>
    </div>
  );
  
};

export default SearchResultContainer;
