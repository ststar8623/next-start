import React from 'react'
import { Editor, Raw } from 'slate'
import { connect } from 'react-redux';
import { getPrompts } from '../reducers/prompts';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'Type here'
        }
      ]
    }
  ]
}, { terse: true });

export class Card extends React.Component {
  state = {
    ...initialState,
    prompts: "default",
  }

  componentWillMount() {
    //this.props.getPrompts();
  }

  onChange = (state) => {
    this.setState({ state })
  }

          //<Editor
            //state={this.state.state}
            //onChange={this.onChange}
          ///>

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render () {
    const { activeItem } = this.state;
    return (
      <div className="card">
        {/* <div>
          <span className="title">Start here</span> <span className="subject">{this.props.prompt}</span>
        </div> */}
        <Menu vertical>
          <Menu.Item>
            <Input placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            Home

            <Menu.Menu>
              <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                Search
              </Menu.Item>
              <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                Add
              </Menu.Item>
              <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                Remove
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            <Icon name='grid layout' />
            Browse
          </Menu.Item>
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
            Messages
          </Menu.Item>

          <Dropdown item text='More'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <div className="editor">
        </div>

        <style jsx>{`
          .card {
            background-color: white;
            //border: 1px solid #393736;
            padding: 15px;
            width: 98%;
            max-width: 1100px;
            height: 98%;
            overflow: auto;
          }
          .title {
            font-size: 2.0em;
            color: #95989A;
          }
          .subject{
            font-size: 2.0em;
            color: #32D900;
          }
          .editor {
            margin-top: 10px;
            font-size: 2.2em;
            line-height: 1.2em;
          }
        `}</style>
      </div>
    )
  }
}

export default connect(state => ({
  prompts: state.prompts,
  prompt: state.prompt,
}), { getPrompts })(Card);
