export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/auth", {
        headers: {
          Authorization: token,
        },
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user.error) {
            alert(user.error);
          } else {
            dispatch({ type: "GET_CURRENT_USER", payload: user });
          }
        });
    };
  } else {
    return (dispatch) => {
      dispatch({ type: "GET_CURRENT_USER", payload: null });
    };
  }
};

export const userLogin = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: data,
      }),
    })
      .then((resp) => resp.json())
      .then((userData) => {
        if (userData.error) {
          alert("Invalid Credentials");
        } else {
          localStorage.setItem("token", userData.jwt);
          dispatch({
            type: "LOGIN",
            payload: userData.user,
          });
        }
      });
  };
};

export const userLogout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };
};

export const userSignup = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: data,
      }),
    })
      .then((resp) => resp.json())
      .then((userData) => {
        debugger;
        if (userData.error) {
          alert("Invalid Credentials");
        } else {
          localStorage.setItem("token", userData.jwt);
          dispatch({
            type: "LOGIN",
            payload: userData.user,
          });
        }
      });
  };
};
