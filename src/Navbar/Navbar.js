import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Navbar=()=> {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//   const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Query'
            // active={activeItem === 'query'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Upload File'
            // active={activeItem === 'uploadfile'}
            // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
            //   active={activeItem === 'logout'}
            //   onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
}

export default Navbar;