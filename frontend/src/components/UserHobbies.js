import React, {useRef} from 'react';
import { connect } from "react-redux";
import { addUserHobby,deleteUserHobby } from "../actions/action";


function Userhobbies({userHobbies, user_id, addUserHobby, deleteUserHobby}) {
  let passionRF = useRef();
  let hobbyRF = useRef();
  let yearRF = useRef();
  
  const addThisHobby = () =>{
    let obj = {
      user_id: user_id,
      passion: passionRF.current.value,
      hobby: hobbyRF.current.value,
      year: yearRF.current.value,
    }
    addUserHobby(obj)
  }
  const deleteThisHobby = (id,user_id) =>{
    deleteUserHobby(id,user_id)
  }
  return (
    <div>
        <table className="table">
          <thead>
            <tr>
              <td>
                <select className="form-control" id="passion" ref={passionRF} >
                  <option value="">---Select Passion---</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </td>
              <td><input type="text" className="form-control" id="userHobby" ref={hobbyRF} placeholder="Enter a user Hobby" /></td>
              <td><input type="text" className="form-control" id="userHobby" ref={yearRF} placeholder="Enter a year" /></td>
              <td>{user_id?<button type="button" className="btn btn-xs btn-primary" onClick={addThisHobby}>Add</button>:""} </td>
            </tr>
          </thead>
          <tbody>
            {
            userHobbies.length>0 ? userHobbies.map( (singleUser,index) => (
              <tr>
                <td><b>Passion: {singleUser.passion}</b></td>
                <td>{singleUser.hobby}</td>
                <td>{singleUser.year}</td>
                <td><button type="button" className="btn btn-xs btn-danger" onClick={(index)=>{deleteThisHobby(index,singleUser.user_id)}}>Delete</button></td>
              </tr>
              ) ):
              <tr>
                <td colSpan="4"><center>No Hobby Found</center></td>
              </tr>
            }
          </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      userHobbies: state.userHobbies?state.userHobbies:[]
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      addUserHobby: (rec) => {
        dispatch(addUserHobby(rec));
      },
      deleteUserHobby: (id,user_id) => {
        dispatch(deleteUserHobby(id,user_id));
      },
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Userhobbies);
