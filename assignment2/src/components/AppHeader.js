import React, { Component } from "react";
import "./appheader.css";
import TableViewBtn from "./TableViewBtn";
import CardViewBtn from "./CardViewBtn";
import { CardView } from "./CardView";
import { TableView } from "./TableView";

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedCardView: true,
      info: this.props.userinfo
    };
    this.cardview = this.cardview.bind(this);
    this.tableview = this.tableview.bind(this);
  }

  cardview() {
    this.setState({ clickedCardView: true });
  }
  tableview() {
    this.setState({ clickedCardView: false });
  }
  render() {
    const info3 = this.props.userinfo;

    let cd;
    if (this.state.clickedCardView) {
      cd = <CardView userinfo={info3}></CardView>;
    } else {
      console.log("tablevieqw");
      cd = <TableView userinfo={info3}></TableView>;
    }

    return (
      <div>
        <div className="container">
          <div className="jumbotron">
            <h1>User Information</h1>
            <p>
              This page will show you the user information in tabular-form as
              well as in card view as you select the option.
            </p>
          </div>
          <CardViewBtn onClick={this.cardview}></CardViewBtn>
          <TableViewBtn onClick={this.tableview}></TableViewBtn>
          {cd}
        </div>
      </div>
    );
  }
}
export default AppHeader;
