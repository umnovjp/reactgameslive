import React from 'react';
// import ResultList from './ResultList';
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
  goalieStats.push(props.results[i].person.fullName);
goalieStats.push(props.results[i].stats.goalieStats.timeOnIce);
goalieStats.push(props.results[i].stats.goalieStats.pim);
goalieStats.push(props.results[i].stats.goalieStats.shots);
goalieStats.push(props.results[i].stats.goalieStats.saves);
console.log(goalieStats)}
else if (props.results[i].position.code === 'N/A') {console.log('fetch screwed up ', props.results[i].position.code)}
else if (props.results[i].position.code === 'C' || 'D') {console.log(props.results[i].stats.skaterStats.timeOnIce);
  console.log(props.results[i].position);
  playerStats.push(props.results[i].person.fullName);
  playerStats.push(props.results[i].jerseyNumber);
  playerStats.push(props.results[i].position.code);
   playerStats.push(props.results[i].stats.skaterStats.timeOnIce);
   playerStats.push(props.results[i].stats.skaterStats.assists);
   playerStats.push(props.results[i].stats.skaterStats.goals);
   playerStats.push(props.results[i].stats.skaterStats.shots);
   playerStats.push(props.results[i].stats.skaterStats.blocked);
   playerStats.push(props.results[i].stats.skaterStats.penaltyMinutes);
   playerStats.push(props.results[i].stats.skaterStats.faceOffWins);
   playerStats.push(props.results[i].stats.skaterStats.faceoffTaken);
   playerStats.push(props.results[i].stats.skaterStats.powerPlayTimeOnIce);
   playerStats.push(props.results[i].stats.skaterStats.shortHandedTimeOnIce);
  console.log(playerStats)}
  else if (props.results[i].position.code === 'R' || 'L') {console.log(props.results[i].stats.skaterStats);
    console.log(props.results[i].position)
     playerStats.push(props.results[i].stats.skaterStats);
    console.log(playerStats)}

else {console.log('position unknown')}}
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
      Goalie will live here 
      {goalieStats[0]}
      {goalieStats[1]}
       He made {goalieStats[4]} saves on {goalieStats[3]} shots
      {console.log(props.results.stats)}
       {props.results.map((result) => (
         <li className="list-group-item" key = {result.jerseyNumber}>
            {result.jerseyNumber}
            {result.person.fullName}
            {result.position.code}
          
            {console.log(result.stats.skaterStats)}
          
            {value}
            
            </li>
 ))
       }  
   <li>{playerStats[0]}{ playerStats[1]}{ playerStats[2]}TOI{ playerStats[3]}A:{ playerStats[4]}G:{ playerStats[5]}Shots:{ playerStats[6]}Blocked:{ playerStats[7]}PIM: { playerStats[8]} FOW: { playerStats[9]} FO: { playerStats[10]} PPTOI: { playerStats[11]} SHTOI: { playerStats[12]}</li>
   <li>{playerStats[13]}{ playerStats[14]}{ playerStats[15]}TOI{ playerStats[16]}A:{ playerStats[17]}G:{ playerStats[18]}Shots:{ playerStats[19]}Blocked:{ playerStats[20]}PIM: { playerStats[21]} FOW: { playerStats[22]} FO: { playerStats[23]} PPTOI: { playerStats[24]} SHTOI: { playerStats[25]}</li>
   <li>{playerStats[26]}{ playerStats[27]}{ playerStats[28]}TOI{ playerStats[29]}A:{ playerStats[30]}G:{ playerStats[31]}Shots:{ playerStats[32]}Blocked:{ playerStats[33]}PIM: { playerStats[34]} FOW: { playerStats[35]} FO: { playerStats[36]} PPTOI: { playerStats[37]} SHTOI: { playerStats[38]}</li>
   <li>{playerStats[39]}{ playerStats[40]}{ playerStats[41]}TOI{ playerStats[42]}A:{ playerStats[43]}G:{ playerStats[44]}Shots:{ playerStats[45]}Blocked:{ playerStats[46]}PIM: { playerStats[47]} FOW: { playerStats[48]} FO: { playerStats[49]} PPTOI: { playerStats[50]} SHTOI: { playerStats[51]}</li>
   <li>{playerStats[52]}{ playerStats[53]}{ playerStats[54]}TOI{ playerStats[55]}A:{ playerStats[56]}G:{ playerStats[57]}Shots:{ playerStats[58]}Blocked:{ playerStats[59]}PIM: { playerStats[60]} FOW: { playerStats[61]} FO: { playerStats[62]} PPTOI: { playerStats[63]} SHTOI: { playerStats[64]}</li>
   <li>{playerStats[65]}{ playerStats[66]}{ playerStats[67]}TOI{ playerStats[68]}A:{ playerStats[69]}G:{ playerStats[70]}Shots:{ playerStats[71]}Blocked:{ playerStats[72]}PIM: { playerStats[73]} FOW: { playerStats[74]} FO: { playerStats[75]} PPTOI: { playerStats[76]} SHTOI: { playerStats[77]}</li>
    </ul>
  );
}

export default PlayerList;
