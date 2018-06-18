import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';



const API_KEY = 'AIzaSyAtfnLuuUP9gnnSUwkbv156MHDMT1wzxYA';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

//Create a new component. this component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />

    </div>
  );
}

//Take this component's html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
