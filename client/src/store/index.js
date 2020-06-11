import React from "react";

export const GlobalContext = React.createContext();
export const initialState = {
  currentAccount: {
    username: "",
    points: 0,
  },
  animals: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addPoints":
      let newState = {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload + state.currentAccount.points,
        },
      };

      console.log(newState);
      return newState;
      break;

    default:
      break;
  }
  return state;
};

// const reducer = (state, action) => {
//   if (action.type === "tasksLoaded") {
//     const newState = {
//       ...state,
//       tasksList: action.payload.tasks,
//       tasksLoaded: true,
//     };
//     return newState;
//   } else if (action.type === "signup") {
//     const newState = {
//       ...state,
//       currentAccount: {
//         id: action.payload._id,
//         username: action.payload.username,
//       },
//     };
//     persistApp(newState);
//     return newState;
//   } else if (action.type === "login") {
//     const newState = {
//       ...state,
//       currentAccount: {
//         id: action.payload._id,
//         username: action.payload.username,
//       },
//     };
//     localStorage.setItem("token", action.payload.token);
//     persistApp(newState);
//     return newState;
//   } else if (action.type === "newTask") {
//     const newState = {
//       ...state,
//       tasksList: [...state.tasksList, action.payload],
//     };
//     return newState;
//   } else if (action.type === "taskCompleted") {
//     const newState = {
//       ...state,
//       tasksList: state.tasksList.map((task) => {
//         if (task.id === action.payload) {
//           task.completed = true;
//           task.completedOn = moment().format("MM/DD/YYYY");
//         }
//         return task;
//       }),
//     };
//     return newState;
//   }
//   return state;
// };
