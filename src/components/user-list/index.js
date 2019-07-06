import React, {Component} from 'react';
import styled from "styled-components";

import UserCard from "../user-card";
import {connect} from "react-redux";
import {getUsers, loadInfoUserByLogin} from "../../actions";
import ErrorAlert from "../error-alert";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

class UserList extends Component {
  componentDidMount() {
    if (!this.props.users.users.length)
      this.props.onGetUsers()
  }

  componentDidUpdate(prevProps, prevState) {
    const {users} = this.props.users;
    if (users.length !== prevProps.users.users.length)
      users.map((user, idx) => this.props.onLoadInfoUserByLogin(user.login, idx))
  }

  render() {
    const {expand_users} = this.props;

    return (
      <FlexColumn>
        {
          expand_users.errors
          ? <ErrorAlert errors={expand_users.errors} />
            : null
        }
        {
          (expand_users.length)
            ?
            expand_users.map((user) => <UserCard
              key={user.login}
              user={user}
            />)
            : <h1>Loading...</h1>
        }
      </FlexColumn>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  expand_users: state.expand_users
});

const mapDispatchToProps = dispatch => ({
  onGetUsers: () => dispatch(getUsers()),
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);