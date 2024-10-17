import { useState } from "react";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AddPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(".................................");
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/users/add`, {
        firstname,
        lastname,
        phone,
        email,
        role,
        location,
        department,
      });      
      console.log(response.data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  }

  if(loading){
    return <Loader/>
  }

  if(error && !loading){
    
    return <Error message={error}/>
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add User Form
        </h2>
        <form onSubmit={handleSubmit} className="border-2 p-9 ">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="First Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Last Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Phone No"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PHONE NO
              </label>
              <input
                type="tel"
                name="phone-no"
                id="phone-no"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Email ID"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                EMAIL ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="First Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ROLE
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LOCATION
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DEPARTMENT
              </label>
              <input
                type="text"
                name="department"
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center sm:mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Add User
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPage;
