import React from 'react';
// console.log('I am in ResultList', typeof props.results.players, Object.values(props.results.players), props.results.players)
// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result

function ResultList(props) {
 // const rosterString = JSON.stringify(props.results.players);
 // const roster = rosterString.split('fullName')
 // console.log(rosterString)
  return (
    <ul className="list-group">
    {/* {const roster1 = props.results.players;} 
    console.log('I am in ResultList', Object.values(props.results)[5])
    */}
      topbar result list
      {
        // {props.results}
      // props.results.map((result) => (
      //   <li className="list-group-item">
      //     <img
      //     alt = {props.results}
      //       // alt={result.title}
      //       // className="img-fluid"
      //       // src={result.images.original.url}
      //     />
      //   </li>
      //  ))
    }
    </ul>
  );
}

export default ResultList;
