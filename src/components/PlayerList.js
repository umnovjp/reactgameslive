import React from 'react';
// console.log('I am in ResultList', typeof props.results.players, Object.values(props.results.players), props.results.players)
// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result

function PlayerList(props) {
 // const rosterString = JSON.stringify(props.results.players);
 // const roster = rosterString.split('fullName')
 // console.log(rosterString)
  return (
    <ul className="list-group">
    {/* {const roster1 = props.results.players;
    const roster2 = Object.values(roster1)} 
    console.log('I am in PlayerList', props.results)
    // {props.results}*/}
      topbar player list
       {props.results.map((result) => (
         <li className="list-group-item" key = {result.jerseyNumber}>
            {result.jerseyNumber}
            {result.person.fullName}
            {result.position.code}
            {result.stats.assists}
            </li>
 ))
       }
    </ul>
  );
}

export default PlayerList;
