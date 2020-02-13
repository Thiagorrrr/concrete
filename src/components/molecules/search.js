import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import Form from '../molecules/form';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };

    this.changeDataResult = this.changeDataResult.bind(this);

  }

  changeDataResult(event) {
    console.log(event)
    this.setState({ results: event });

  }

  render() {

    const { results } = this.state;
    return (
      <div className="search">
        <h1 className="search__title Text-Style-3 ">Github <span className="search__title--highligth Text-Style ">search</span> </h1>


        <Form sendDataResult={this.changeDataResult} />

        {results != '' &&
          <Redirect to={{
            pathname: '/results',
            search: `?q=${results.login}`,
            state: { item: { results } }
          }}
          />
        }

      </div>
    )
  }
}
export default Search;
