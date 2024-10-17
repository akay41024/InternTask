import {useState, useEffect} from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
const Table = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${apiUrl}/api/v1/users/all`);
      setUsers(response.data.data);
      console.log(response.data.data);
    };
    
    fetchUsers();
  }
  ,[]);


  const searchHandle = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <>
    <div className="flex justify-start p-5 text-black bg-slate-100 dark:bg-[#111827] dark:text-white">
      <input type="text" id="mySearch" onKeyUp={searchHandle} placeholder="Search by Email" className="px-3 py-2 ml-5 dark:bg-slate-400 dark:text-white text-black rounded-md w-[250px] placeholder:text-slate-700 placeholder:text-lg border-2 border-black dark:placeholder:text-white"/>
    </div>
    <div className="flex justify-start p-5 text-black dark:bg-[#111827] dark:text-white">
      <div className="w-full">
        <table className="w-full">
          <thead className="rounded-none">
            <tr className="text-black dark:text-white">
              <th>NAME</th>
              <th>PHONE NO</th>
              <th>EMAIL</th>
              <th>TYPE</th>
              <th>LOCATION</th>
              <th>FUNCTION</th>
            </tr>
          </thead>
          <tbody>
          {
                users.map((user) => (
                  <tr key={user._id} className="text-center text-black border-t-2 border-b-2 h-14 dark:text-white">
                    <td>{user.firstname} {user.lastname}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.location}</td>
                    <td>{user.department}</td>
                    <td>
                      <Link to={`/${user._id}`}>
                        <button
                          type="button"
                          className="flex gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                        >
                          <FaEdit className="font-bold size-4" />
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Table;
