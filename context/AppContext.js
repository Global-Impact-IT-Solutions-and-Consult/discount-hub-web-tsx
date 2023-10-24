"use client";

import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { error } from "../helpers/Alert";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [leftPanelLoading, setLeftPanelLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [printing, setPrinting] = useState(false);
  const [topbarName, setTopbarName] = useState("Welcome!");

  // USERS
  const [users, setUsers] = useState([]);
  const [usersByDept, setUsersByDept] = useState([]);
  const [userLogs, setUserLogs] = useState([]);

  //************/
  //*******/

  // **************** //
  //*** FUNCTIONS ***//
  // **************** //

  const fetchServices = async () => {
    const client = new ApolloClient({
      uri: "http://discounthub.local/graphql",
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query discountHub {
          products {
            nodes {
              products {
                location
                price
                productRating
                store
                summary
                title
              }
            }
          }
        }
      `,
    });
    console.log(
      "🚀 ~ file: AppContext.js:54 ~ fetchServices ~ response:",
      response
    );

    const getResponse = response.data.footer.footers;
    // return getResponse;
  };

  // Get active user
  const activeUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `https://hospital-ms-api.herokuapp.com/users/${userId}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log("~ activeUser ~ error", error);
    }
  };

  // Get All users
  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://hospital-ms-api.herokuapp.com/users?page=0&size=15",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("getUsers ~ response", response);
      setLoading(false);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        // error("Unauthorized");
        localStorage.removeItem("token");
        window.location.reload(false);
      }
    }
  };

  //*******/
  //************/
  // fetch everything on startup
  //************/
  //*******/

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Fetch everything");
      getUsers();
      activeUser();
      fetchServices();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        // Misc
        user,

        setUser,

        // Users
        users,

        setUsers,
        getUsers,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export default AppContext;
