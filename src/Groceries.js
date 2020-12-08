import React from "react";
import GroceryFunc from "./GroceryFunc";
import List from "./List";

class Groceries extends React.Component {

  state = {
    groceries: [
      {id:1, name: "Eggs", complete: false},
      {id:2, name: "Steak", complete: false},
      {id:3, name: "Bacon", complete: false},
    ]
  };

  addGroceries = (groceryName) => {
    const grocery = {
      id: Math.random(),
      name: groceryName,
      complete: false,
    };

    this.setState({
      groceries: [...this.state.groceries, grocery],
    });
  };

  deleteGroceries = (id) => {
    let filteredGroceries =this.state.groceries.filter((g) => g.id !== id);

    this.setState({groceries: filteredGroceries})
  }


  toggle = (id) => {
    let updateGroceries = this.state.groceries.map((g) => {
      if (g.id !== id){
        return g
      }
      return {...g, complete:!g.complete}
    })
    this.setState({groceries: updateGroceries})

  }

  editGrocery = (id, newName) => {
    console.log("editing")
    let editedGroceries = this.state.groceries.map((g) => {
      if (g.id !== id) {
        return g
      }
      return {...g, name : newName}
    })
    this.setState({groceries: editedGroceries})
  }

  render () {
    return (
    <div>
      <h1>Groceries</h1>
      <GroceryFunc GroceryCallback = {this.Groceries}/>
      <div className="list">
        <List completeToggle = {this.toggle} 
              deleteGrocery = {this.deleteGroceries} 
              editGrocery = {this.editGrocery}
              items = {this.state.groceries} />
      </div>
    </div>
  )
  }
}

export default Groceries;
