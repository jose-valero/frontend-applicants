import React, { useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../reducers/userContext';
import Spinner from './Spinner';
import { transoformData } from '../utis/dataStructure';

const Users = () => {
  const userContext = useContext(UserContext);

  const { loading, users } = userContext;

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div style={userStyle}>
        {console.log('dataStructure', transoformData(users))}
        {transoformData(users).map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
