import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function ResultList(props) {
  return (
    <ul className="list-group">
      topbar
      console.log('results')
      { console.log('I am in ResultList', typeof props.results.players, Object.values(props.results))
      
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
