let {userData} = require("../models/user.model");

const getUser = async (req, res) => {
  res.send(userData.users)
};
const addUser = async (req, res) => {
  let lastID = userData.users[userData.users.length - 1].id
  let newRec = {
    id: lastID+1,
    name: req.body.username
  }
  userData.users.push(newRec)
  res.send("ok")
};
const getHobbies = async (req, res) => {
  let user_id = req.params.user_id;
  if(userData.userHobbies.length > 0){
    let hobbies = userData.userHobbies.filter(single_rec => {
      if(single_rec.user_id == user_id){
        return single_rec
      }
    })
    if(hobbies.length > 0 ){
      res.send(hobbies)
    }else{
      res.send("no_rec")
    }
  }else{
    res.send("no_rec")
  }
};
const addHobby = async (req, res) => {
  let newRec = {
    user_id: req.body.user_id,
    passion: req.body.passion,
    hobby: req.body.hobby,
    year: req.body.year,
  }
  userData.userHobbies.push(newRec)
  res.send("ok")
};
const delHobby = async (req, res) => {
  let id = req.params.id
  userData.userHobbies.splice(id,1)
  res.send("ok")
};
module.exports = {
  getUser,
  addUser,
  getHobbies,
  addHobby,
  delHobby
};
