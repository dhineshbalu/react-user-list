import React from 'react';
import CustomersList from './components/customersList'
import SelectedCustomer from './components/SelectedCustomer'
import usersJson from './static/users.json'
import { find } from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       customersListData: usersJson.ok === true ? usersJson.members : [],
       selectedCustomer: null,
       showModal: false
    }
  }
  selectCustomer = (id) => {
    this.setState({
      selectedCustomer: id,
      showModal: true
    })
  }
  render() {
    let { customersListData, showModal, selectedCustomer } = this.state
     return (
       <React.Fragment>
         <h2 style={{textAlign: 'center', letterSpacing: '1px'}}>Customer's List</h2>
         <CustomersList selectCustomer={this.selectCustomer} customersData={customersListData}></CustomersList>
        {
           showModal ?  <SelectedCustomer selCust={find(customersListData, {id: selectedCustomer})} onClose={() => {
             this.setState({
               SelectedCustomer: null,
               showModal: false
             })
           }}></SelectedCustomer> : null
        }
       </React.Fragment>
     )
  }
}

export default App;
