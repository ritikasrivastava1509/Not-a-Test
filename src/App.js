import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Welcome from './Welcome.js'
import './App.css'

const Userdata = [
  { id: '1', name: 'Myles' },
  { id: '2', name: 'John' },
  { id: '3', name: 'Rovian' },
  { id: '4', name: 'Zach' }
]
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { Userdata: Userdata }
  }

  handleChange = e => {
    alert('I am trying to make it work')
  }

  render() {
    return (
      <div className="App">
        <header className="hdrCls">
          <Welcome data={Userdata[Userdata.length - 1]} />
        </header>
        <div className="">
          <ReactTable
            className="bodyCls"
            data={this.state.Userdata}
            columns={[
              { Header: 'Name', accessor: 'name', className: 'hdrcls' },
              {
                Header: 'Action',
                accessor: 'id',
                className: '',
                Cell: props => (
                  <button onClick={e => this.handleChange(e)}>Edit</button>
                )
              }
            ]}
          />
        </div>
      </div>
    )
  }
}
export default App
