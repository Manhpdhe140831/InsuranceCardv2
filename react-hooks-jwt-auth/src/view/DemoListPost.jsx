import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import postApi from '../api/postApi';
import EditListCustomer from './EditListCustomer';
import Post from './Post';

DemoListPost.propTypes = {
  data: PropTypes.array,
};

DemoListPost.defaultProps = {
  data: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ],
};
function DemoListPost({ data }) {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const fetchStaff = async () => {
      const res = await postApi.getAll();
      console.log(res);
      setPostList(res);
    };
    fetchStaff();
  }, []);
  const [searchStr, setSearchStr] = useState('');
  const [searchList, setSearchList] = useState(data);
  const listData = data;
  const handleSearch = () => {
    setSearchList(
      listData.filter((post) =>
        post.title.toLowerCase().includes(searchStr.toLowerCase())
      )
    );
  };

  const [isShow, setIsShow] = useState(false);
  const [customerTemp, setCustomerTemp] = useState(null);

  const handleCloseModal = () => {
    setIsShow(false);
  };

  return (
    <React.Fragment>
      <div className="container_liststaff">
        <div className="container-search_liststaff">
          <div className="main_search">
            <input
              className="input_liststaff"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
            />{' '}
            <button className="button-search_liststaff" onClick={handleSearch}>
              <BsSearch style={{ color: 'white' }} size={20} />
            </button>
          </div>
        </div>
        <table className="content-table">
          <thead>
            <tr>
              <th>USER ID</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post) => (
              <Post
                key={post.id}
                post={post}
                setIsShow={setIsShow}
                setCustomerTemp={setCustomerTemp}
              />
            ))}
          </tbody>
        </table>
        {/* style={isShow?{display:"flex"}:{display:"none"}} */}
        {/* {isShow && (
          <div className="modalCst">
            <div className="modal-edit">
              <EditListCustomer
                customer={customerTemp}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        )} */}
      </div>
    </React.Fragment>
    // <>
    //   {/* {postList.map((post) => (
    //     // <Post
    //     //   key={post.id}
    //     //   post={post}
    //     //   setIsShow={setIsShow}
    //     //   setCustomerTemp={setCustomerTemp}
    //     // />
    //     console.log(post.userId)
    //   ))} */}
    // </>
  );
}

export default DemoListPost;
