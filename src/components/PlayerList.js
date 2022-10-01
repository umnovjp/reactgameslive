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
 let unknownRoster = [];
 for (i = 0; i < props.results.length; i++) {
if (props.results[i].position.code === 'G') {console.log(props.results[i].stats.goalieStats)
  goalieStats.push(props.results[i].person.fullName);
goalieStats.push(props.results[i].stats.goalieStats.timeOnIce);
goalieStats.push(props.results[i].stats.goalieStats.pim);
goalieStats.push(props.results[i].stats.goalieStats.shots);
goalieStats.push(props.results[i].stats.goalieStats.saves);
console.log(goalieStats)}
else if (props.results[i].position.code === 'N/A') {console.log('fetch screwed up ', props.results[i].position.code);
unknownRoster.push(props.results[i].person.fullName);}
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
      Goalies live here 
      <li> {goalieStats[0]}
      {goalieStats[1]}
       He made {goalieStats[4]} saves on {goalieStats[3]} shots</li>
       <li> {goalieStats[5]}
      {goalieStats[6]}
      He made {goalieStats[9]} saves on {goalieStats[8]} shots</li>
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
       <li>Scratches {unknownRoster}</li>
   <li>{playerStats[0]}{ playerStats[1]}{ playerStats[2]} TOI { playerStats[3]} A: { playerStats[4]} G: { playerStats[5]} Shots: { playerStats[6]} Blocked: { playerStats[7]} PIM: { playerStats[8]} FOW: { playerStats[9]} FO: { playerStats[10]} PPTOI: { playerStats[11]} SHTOI: { playerStats[12]}</li>
   <li>{playerStats[13]}{ playerStats[14]}{ playerStats[15]} TOI { playerStats[16]} A: { playerStats[17]} G: { playerStats[18]} Shots: { playerStats[19]} Blocked: { playerStats[20]} PIM: { playerStats[21]} FOW: { playerStats[22]} FO: { playerStats[23]} PPTOI: { playerStats[24]} SHTOI: { playerStats[25]}</li>
   <li>{playerStats[26]}{ playerStats[27]}{ playerStats[28]} TOI { playerStats[29]} A: { playerStats[30]} G: { playerStats[31]} Shots: { playerStats[32]} Blocked: { playerStats[33]} PIM: { playerStats[34]} FOW: { playerStats[35]} FO: { playerStats[36]} PPTOI: { playerStats[37]} SHTOI: { playerStats[38]}</li>
   <li>{playerStats[39]}{ playerStats[40]}{ playerStats[41]} TOI { playerStats[42]} A: { playerStats[43]} G: { playerStats[44]} Shots: { playerStats[45]} Blocked: { playerStats[46]} PIM: { playerStats[47]} FOW: { playerStats[48]} FO: { playerStats[49]} PPTOI: { playerStats[50]} SHTOI: { playerStats[51]}</li>
   <li>{playerStats[52]}{ playerStats[53]}{ playerStats[54]} TOI { playerStats[55]} A: { playerStats[56]} G: { playerStats[57]} Shots: { playerStats[58]} Blocked: { playerStats[59]} PIM: { playerStats[60]} FOW: { playerStats[61]} FO: { playerStats[62]} PPTOI: { playerStats[63]} SHTOI: { playerStats[64]}</li>
   <li>{playerStats[65]}{ playerStats[66]}{ playerStats[67]} TOI { playerStats[68]} A: { playerStats[69]} G: { playerStats[70]} Shots: { playerStats[71]} Blocked: { playerStats[72]} PIM: { playerStats[73]} FOW: { playerStats[74]} FO: { playerStats[75]} PPTOI: { playerStats[76]} SHTOI: { playerStats[77]}</li>
   <li>{playerStats[78]}{ playerStats[79]}{ playerStats[80]} TOI { playerStats[81]} A: { playerStats[82]} G: { playerStats[83]} Shots: { playerStats[84]} Blocked: { playerStats[85]} PIM: { playerStats[86]} FOW: { playerStats[87]} FO: { playerStats[88]} PPTOI: { playerStats[89]} SHTOI: { playerStats[90]}</li>
   <li>{playerStats[91]}{ playerStats[92]}{ playerStats[93]} TOI { playerStats[94]} A: { playerStats[95]} G: { playerStats[96]} Shots: { playerStats[97]} Blocked: { playerStats[98]} PIM: { playerStats[99]} FOW: { playerStats[100]} FO: { playerStats[101]} PPTOI: { playerStats[102]} SHTOI: { playerStats[103]}</li>
   <li>{playerStats[104]}{ playerStats[105]}{ playerStats[106]} TOI { playerStats[107]} A: { playerStats[108]} G: { playerStats[109]} Shots: { playerStats[110]} Blocked: { playerStats[111]} PIM: { playerStats[112]} FOW: { playerStats[113]} FO: { playerStats[114]} PPTOI: { playerStats[115]} SHTOI: { playerStats[116]}</li>
   <li>{playerStats[117]}{ playerStats[118]}{ playerStats[119]} TOI { playerStats[120]} A: { playerStats[121]} G: { playerStats[122]} Shots: { playerStats[123]} Blocked: { playerStats[124]} PIM: { playerStats[125]} FOW: { playerStats[126]} FO: { playerStats[127]} PPTOI: { playerStats[128]} SHTOI: { playerStats[129]}</li>
   <li>{playerStats[130]}{ playerStats[131]}{ playerStats[132]} TOI { playerStats[133]} A: { playerStats[134]} G: { playerStats[135]} Shots: { playerStats[136]} Blocked: { playerStats[137]} PIM: { playerStats[138]} FOW: { playerStats[139]} FO: { playerStats[140]} PPTOI: { playerStats[141]} SHTOI: { playerStats[142]}</li>
   <li>{playerStats[143]}{ playerStats[144]}{ playerStats[145]} TOI { playerStats[146]} A: { playerStats[147]} G: { playerStats[148]} Shots: { playerStats[149]} Blocked: { playerStats[150]} PIM: { playerStats[151]} FOW: { playerStats[152]} FO: { playerStats[153]} PPTOI: { playerStats[154]} SHTOI: { playerStats[155]}</li>
   <li>{playerStats[156]}{ playerStats[157]}{ playerStats[158]} TOI { playerStats[159]} A: { playerStats[160]} G: { playerStats[161]} Shots: { playerStats[162]} Blocked: { playerStats[163]} PIM: { playerStats[164]} FOW: { playerStats[165]} FO: { playerStats[166]} PPTOI: { playerStats[167]} SHTOI: { playerStats[168]}</li>
   <li>{playerStats[169]}{ playerStats[170]}{ playerStats[171]} TOI { playerStats[172]} A: { playerStats[173]} G: { playerStats[174]} Shots: { playerStats[175]} Blocked: { playerStats[176]} PIM: { playerStats[177]} FOW: { playerStats[178]} FO: { playerStats[179]} PPTOI: { playerStats[180]} SHTOI: { playerStats[181]}</li>
   <li>{playerStats[182]}{ playerStats[183]}{ playerStats[184]} TOI { playerStats[185]} A: { playerStats[186]} G: { playerStats[187]} Shots: { playerStats[188]} Blocked: { playerStats[189]} PIM: { playerStats[190]} FOW: { playerStats[191]} FO: { playerStats[192]} PPTOI: { playerStats[193]} SHTOI: { playerStats[194]}</li>
   <li>{playerStats[195]}{ playerStats[196]}{ playerStats[197]} TOI { playerStats[198]} A: { playerStats[199]} G: { playerStats[200]} Shots: { playerStats[201]} Blocked: { playerStats[202]} PIM: { playerStats[203]} FOW: { playerStats[204]} FO: { playerStats[205]} PPTOI: { playerStats[206]} SHTOI: { playerStats[207]}</li>
   <li>{playerStats[208]}{ playerStats[209]}{ playerStats[210]} TOI { playerStats[211]} A: { playerStats[212]} G: { playerStats[213]} Shots: { playerStats[214]} Blocked: { playerStats[215]} PIM: { playerStats[216]} FOW: { playerStats[217]} FO: { playerStats[218]} PPTOI: { playerStats[219]} SHTOI: { playerStats[220]}</li>
   <li>{playerStats[221]}{ playerStats[222]}{ playerStats[223]} TOI { playerStats[224]} A: { playerStats[225]} G: { playerStats[226]} Shots: { playerStats[227]} Blocked: { playerStats[228]} PIM: { playerStats[229]} FOW: { playerStats[230]} FO: { playerStats[231]} PPTOI: { playerStats[232]} SHTOI: { playerStats[233]}</li>
    </ul>
   
  );
}

export default PlayerList;
