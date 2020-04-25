import React, {useRef,useEffect} from 'react';
import { connect } from "react-redux";
import { getAllUsers, addUser } from "../actions/action";


function User({fetchUsers, allUsers, addUser, getHobbies}) {
    useEffect(() => {
        fetchUsers()
      }, []);
    const userNameRF = useRef();
    const addThisUser = () =>{
      addUser(userNameRF.current.value)
    }
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <td><input type="text" className="form-control" id="user" ref={userNameRF} placeholder="Enter a user name" /></td>
          <td><button type="button" className="btn btn-xs btn-primary" onClick={addThisUser}>Submit</button></td>
        </tr>
        </thead>
        <tbody>
        {allUsers.map( (singleUser,index) => (
          <tr onClick={()=>{getHobbies(singleUser.id)}}>
            <td>{singleUser.name}</td>
          </tr>
          ) )}
        </tbody>
      </table>
    
    </div>
  );
}
const mapStateToProps = state => {
    return {
      allUsers: state.users,
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => {
        dispatch(getAllUsers());
      },
      addUser: (username) => {
        dispatch(addUser(username));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(User);
