import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) =>
    API.search(query)
      .then((res) => {console.log('response from nhl api:', res.data)
        setResult(res.data.liveData);
      })
      .catch((err) => console.log(err));

  // TODO: Fix the useEffect hook running after every
  useEffect(() => {
    searchMovie('2021021133');
  }, []);

  // TODO: Fix the handleInputChange function
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // TODO: Fix the handleFormSubmit function not actually searching for the movie
  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovie(search);
   // setSearch(e.target.value);
  };
  console.log(result)
  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    boxscore = '',
    decisions = '',
    linescore = '',
    plays = ''
  } = result;
  
  console.log(result.linescore);
  console.log(result.plays)

  const boxscore1 = result.boxscore;
 // var boxscore2 = JSON.parse(boxscore1);
  console.log(boxscore1) //
  console.log(typeof boxscore1)
  console.log(Object.values(boxscore1))
  // const officials1 = boxscore1.officials
  // console.log(officials1)

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */
// .officials[0].official.fullName
  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={ 'Search for a game to Begin'}>
            {result ? (
              <MovieDetail
                boxscore={result.boxscore}
                
               plays = {result.plays}
                // genre={Genre}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;
