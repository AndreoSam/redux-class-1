import { user_api } from "../../../Api/apiUrl";
import { crud } from "./CrudConst";

export const getapi = (userValue) => {
  return async (dispatch) => {
    dispatch ({type: `${constAuth.GET}`})
  }
}



// export const viewUser = () => {
//   return {
//     type: crud.VIEW,
//   };
// };

// export const editUser = () => {
//   return {
//     type: crud.EDIT,
//     payload: { msg: "User Updated!" },
//   };
// };

// export const addUser = () => {
//   return {
//     type: crud.ADD,
//     payload: { msg: "User Added Successfully!" },
//   };
// };

// export const deleteUser = () => {
//   return {
//     type: crud.DELETE,
//     payload: { msg: "User Deleted!" },
//   };
// };
