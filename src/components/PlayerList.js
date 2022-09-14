import React from 'react';
import ResultList from './ResultList';
// console.log('I am in ResultList', typeof props.results.players, Object.values(props.results.players), props.results.players)
// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
const value = 113;

function PlayerList(props) {
 // const rosterString = JSON.stringify(props.results.players);
 // const roster = rosterString.split('fullName')
 let i = 0;
 let goalieStats = [];
 let playerStats = [];
 for (i = 0; i < props.results.length; i++) {
if (props.results[i].position.code === 'G') {console.log(props.results[i].stats.goalieStats)
goalieStats.push(props.results[i].stats.goalieStats.timeOnIce);
goalieStats.push(props.results[i].stats.goalieStats.pim);
goalieStats.push(props.results[i].stats.goalieStats.shots);
goalieStats.push(props.results[i].stats.goalieStats.saves);
console.log(goalieStats)}

else if (props.results[i].position.code === 'C' || 'D' || 'R' || 'L') {console.log(props.results[i].stats.skaterStats);
  console.log(props.results[i].position)
  // playerStats.push(props.results[i].stats.skaterStats.pim);
  // playerStats.push(props.results[i].stats.skaterStats.shots);
  // playerStats.push(props.results[i].stats.skaterStats.saves);
  console.log(playerStats)}
else if (props.results[i].position.code === 'N/A') {console.log('position NA')}
else console.log('position unknown')}
//  for (i = 0; i < props.results.length; i++) {
//   if (props.results.position.code === 'G')
//   {console.log(props.results.stats.goalieStats)}
//     else {console.log(props.results.stats.skaterStats)}
//  }
  return (
    <ul className="list-group">
    {/* {const roster1 = props.results.players;
    const roster2 = Object.values(roster1)} 
    console.log('I am in PlayerList', props.results)
    // {props.results}
    
    */    
    }    
      topbar player list
      {console.log(props.results.stats)}
       {props.results.map((result) => (
         <li className="list-group-item" key = {result.jerseyNumber}>
            {result.jerseyNumber}
            {result.person.fullName}
            {result.position.code}
            {console.log(result.stats)}
            {value}
            </li>
 ))
       }  
   
    </ul>
  );
}

export default PlayerList;
