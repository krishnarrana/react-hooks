import { useState, useEffect } from "react";

function User() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUserList(data);
    console.log(data);
  };

  return (
    <>
      <div>
        {userList.map((user) => (
          <h2 key={user.id}>{user.login}</h2>
        ))}
      </div>
    </>
  );
}

export default User;
