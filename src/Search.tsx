import { Component, Fragment } from 'react';
import './App.css';
import ReactSearchBox from 'react-search-box'


export default class Search extends Component {
  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]

  render() {
    return (
      <Fragment>
        <ReactSearchBox
          placeholder="Placeholder"
          value="Doe"
          data={this.data}
          callback={(record: any) => console.log(record)}
        />
      </Fragment>
    )
  }
}
