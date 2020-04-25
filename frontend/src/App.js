import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import UserHobbies from "./components/UserHobbies";
import { connect } from "react-redux";
import { getuserHobbies } from "./actions/action";

function App({getuserHobbies}) {
  const [userId, setUserId] = useState();
  const getHobbies = (user_id)=>{
    setUserId(user_id)
    getuserHobbies(user_id)
  }
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <Users getHobbies={getHobbies} />
            </div>
            <div className="col-md-6">
                <UserHobbies user_id={userId} />
            </div>
        </div>
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
    getuserHobbies: (user_id) => {
      dispatch(getuserHobbies(user_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
