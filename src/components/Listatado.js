import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users/1";

const Listado = () => {
  const [userData, setData] = useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const JsonData = await response.json();
    setData(JsonData);
   
  };

  useEffect(() => {
    getUserData();
  }, []);
  return <>
     <div>
         <p>{userData.name}</p>
         <p>{userData.website}</p>
         <p>{userData.email}</p>
         <p>{userData.phone}</p>

     </div>
  </>;
};
export default Listado;
