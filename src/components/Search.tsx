import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, SearchProps } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const getResults = () =>
  _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    category: faker.random.word(),
  }))

export default class SearchExampleCategory extends Component {
  state = initialState

  onSearchChange(event: React.MouseEvent<HTMLElement>, data: SearchProps) {
    this.setState({
      isLoading: false,
      value: data.value,
      results: getResults(),
    });
  }
  handleResultSelect = (_e: React.MouseEvent<HTMLElement>, { result }: any) => this.setState({ value: result.title })

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
      loading={isLoading}
      onResultSelect={this.handleResultSelect}
      onSearchChange={this.onSearchChange.bind(this)}
      results={results}
      value={value}
    />
    )
  }
}
