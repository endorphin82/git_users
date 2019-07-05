import React, {Component} from 'react';
import styled from "styled-components";

import UserCard from "../user-card";
import {connect} from "react-redux";
import {getUsers, loadInfoUserByLogin} from "../../actions";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

class UserList extends Component {
  componentDidMount() {
    if (!this.props.users.users.length)
      this.props.onGetUsers()
    // if (this.props.users.users.length >=10)

  }

  render() {
    console.log('UserList this.props',this.props);
    const {users} = this.props.users;

    return (
      <FlexColumn>
        <button onClick={this.piu('klimov-paul')}>piu</button>
        {
          users.length
            ?
            users.map(user => <UserCard
              key={user.login}
              user={user}
            />)
            : null
        }
        {
          users.length
            ?
            users.map((user, idx) => this.props.onLoadInfoUserByLogin(user.login, idx))
            : null
        }
      </FlexColumn>
    );
  }

  piu = (s) => () => {
    console.log(s);
    this.props.onLoadInfoUserByLogin(s);
  }

}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);