import React from "react";
import { Editor, Raw } from "slate";
import { connect } from "react-redux";
import { getPrompts } from "../reducers/prompts";

import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";

import baseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const initialState = Raw.deserialize(
  {
    nodes: [
      {
        kind: "block",
        type: "paragraph",
        nodes: [
          {
            kind: "text",
            text: "Type here"
          }
        ]
      }
    ]
  },
  { terse: true }
);

export class Nav extends React.Component {
  state = {
    ...initialState,
    prompts: "default"
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
    console.log("open");
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose.bind(this)}>Menu </MenuItem>
          <MenuItem onClick={this.handleClose.bind(this)}>History </MenuItem>
          <MenuItem onClick={this.handleClose.bind(this)}>About </MenuItem>
        </Drawer>

        <AppBar
          title="Home"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />

        {/* <style jsx>{`
          .card {
            background-color: white;
            border: 1px solid #393736;
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
        `}</style> */}
      </div>
    );
  }
}

Nav.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default connect(
  state => ({
    prompts: state.prompts,
    prompt: state.prompt
  }),
  { getPrompts }
)(Nav);
