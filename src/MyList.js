import React, { Component } from 'react'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    const todosComponents = this.props.theList.map((item, idx) => (
      <div>
        <ListItem task={item} key={`listitem-${idx}`} />
      </div>
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>

        <ul>
          {todosComponents}

        </ul>
      </div>
    )
  }
}

export default MyList