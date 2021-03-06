// configuration to access heroku database
// "development": {
//   "username": "umk01e2375qvi5qx",
//   "password": "f1idg5bqejquu4sf",
//   "database": "i34adtr8uas8wno3",
//   "host": "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   "port": 3306,
//   "dialect": "mysql"
// },

import React from "react";

export const GlobalContext = React.createContext();
export const initialState = {
  currentAccount: {
    username: "", //use userid instead
    points: 0,
  },
  animals: [],
  currentAnimal: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addPoints":
      const newState = {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload + state.currentAccount.points,
        },
      };
      return newState;
    case "updatePoints":
      localStorage.setItem("points", action.payload);
      return {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload,
        },
      };
    case "storeAnimals":
      return {
        ...state,
        animals: action.payload,
      };
    case "setCurrentAnimal":
      // const currentAnimal = state.animals.find(
      //   // eslint-disable-next-line
      //   (animal) => animal.id == action.payload
      // );
      // console.log(currentAnimal);
      return {
        ...state,
        currentAnimal: action.payload,
      };

    default:
      return state;
    // break;
  }
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
