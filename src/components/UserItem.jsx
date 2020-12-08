import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({
  user: { id, username, url, avatar },
}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar}
        alt=''
        className='rounded-circle d-block mx-auto my-1'
        style={{ width: '60px' }}
      />
      <h5>
        {username}
      </h5>
      <h5>ID:{id}</h5>
      <div>
        <a href={url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
