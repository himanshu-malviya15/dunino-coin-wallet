import React, { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server.duinocoin.com/users/pravigya"
        );
        const data = await response.json();
        setUserData(data.result.balance);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        marginLeft: "200px",
        padding: "20px",
        // backgroundColor: '#f5f5f5',
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {userData ? (
        <div
          style={{
            width: "1000px",
            padding: "20px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ fontSize: "48px", marginBottom: "80px" }}>
            Welcome back,{" "}
            {userData.username.charAt(0).toUpperCase() +
              userData.username.slice(1)}
            !
          </h2>

          <p
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Balance: {userData.balance + 100} DUCO
          </p>
          <p
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Created: 10/01/2024, 12:07:36
          </p>
          <p
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Last Login: {new Date(userData.last_login * 1000).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
