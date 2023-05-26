import React, {useState, useEffect} from 'react';
import api from '../utils/api';

const App = () => {
  // inisiasi data user dengan hoox
  const [user, setUser] = useState();
  // proses penanganan data
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let {data} = await api.get("user");
    if (data) {
      console.log(data);
      // mengisi data ke variable user
      // setUser(data.user);
    }
  };


  return (
    <div>
      <h1>Halao React Laravel</h1>
      <h2>ini adalah halaman utama react</h2>
      <table border={1}>
        <tr>
          <td>Nama</td>
          <td>Email</td>
        </tr>
        {/* {user.length > 0 && user.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.email}</td>
            </tr>
          )
        }) } */}
      </table>
    </div>
  )
}

export default App;
