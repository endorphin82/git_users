import React, {Component} from 'react';
import styled from "styled-components";

import UserCard from "../user-card";
import {connect} from "react-redux";
import {getUsers, loadInfoUserByLogin} from "../../actions";

const FlexColumn = styled.div`
  //width: 100%;
  display: flex;
  flex-direction: column;
`;

class UserList extends Component {

  componentDidMount() {
    if (!this.props.users.users.length)
    this.props.onGetUsers();
  }

  render() {
    console.log(this.props);
    const {users} = this.props.users;
    return (
      <FlexColumn>
        <button onClick={this.piu('klimov-psaul')}>piu</button>
        {
          users.length
            ?
            users.map(user => <UserCard
              user={user}
            />)
            : null
        }
      </FlexColumn>
    );
  }

  piu = (s) => () => {
    this.props.onLoadInfoUserByLogin(s);
    console.log(s);
  }

}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
  onLoadInfoUserByLogin: () => dispatch(loadInfoUserByLogin())

});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);