import PropTypes from 'prop-types';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
Post.propTypes = {
  staff: PropTypes.object,
};
function Post({ post, setIsShow, setStaffTemp }) {
  const handleEdit = () => {
    setIsShow(true);
    setStaffTemp(post);
  };
  return (
    <tr>
      <td>{post.userId}</td>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>

      <td>
        <AiFillEye size={20} style={{ cursor: 'pointer' }} />
        <BsFillPencilFill
          onClick={() => handleEdit()}
          size={15}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
        <BsFillTrashFill
          size={15}
          style={{ marginLeft: '5px', cursor: 'pointer' }}
        />
      </td>
    </tr>
  );
}

export default Post;
