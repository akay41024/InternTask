import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const apiUrl = import.meta.env.VITE_API_URL;
const EditPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Get the user ID from URL params
  const navigate = useNavigate(); // To redirect after form submission

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

 // Loading data from API when the component mounts
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/users/${id}`);
      // Setting the fetched data to state for editing

      setFirstName(response.data.data.firstname);
      setLastName(response.data.data.lastname);
      setPhone(response.data.data.phone);
      setRole(response.data.data.role);
      setLocation(response.data.data.location);
      setDepartment(response.data.data.department);
      setEmail(response.data.data.email);
      
      
    } catch (error) {
      setError("Error fetching user data.", error);
    }
  };

  fetchUser();
}, [id]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(`${apiUrl}/api/v1/users/edit/${id}`, {
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


  // Render loading indicator if data is being fetched
  if (loading) {
    return <Loader />;
  }

  // Render error message if there's an error fetching data
  if (error && !loading) {
    return <Error error={error} />;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit User Form
        </h2>
        <form onSubmit={handleSubmit} className="border-2 p-9 ">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                FIRST NAME
              </label>
              <input
                type="text"
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
                htmlFor="last-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LAST NAME
              </label>
              <input
                type="text"
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
                htmlFor="phone-no"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PHONE NO
              </label>
              <input
                type="tel"
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
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                EMAIL ID
              </label>
              <input
                type="email"
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
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ROLE
              </label>
              <input
                type="text"
                id="role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                LOCATION
              </label>
              <input
                type="text"
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
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                DEPARTMENT
              </label>
              <input
                type="text"
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
            Edit User
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPage;


































// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useQuery } from "react-query";
// import Loader from "../components/Loader";
// import Error from "../components/Error";

// const EditPage = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data, error: errorData, isLoading: loadingData } = useQuery(
//     ["user", id],
//     async () => {
//       if (!id) return;
//       const { data } = await axios.get(`/api/users/${id}`);
//       return data;
//     },
//     {
//       enabled: !!id, // Only run query if id is available
//     }
//   );
  
  

//   const [firstname, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [role, setRole] = useState('');
//   const [location, setLocation] = useState('');
//   const [department, setDepartment] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (data) {
//       setFirstName(data.firstname);
//       setLastName(data.lastname);
//       setPhone(data.phone);
//       setRole(data.role);
//       setLocation(data.location);
//       setDepartment(data.department);
//       setEmail(data.email);
//     }
//   }, [data]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
  
//     try {
//       await axios.patch(`/api/users/edit/${id}`, {
//         firstname,
//         lastName,
//         phone,
//         email,
//         role,
//         location,
//         department,
//       });
//       navigate("/");
//     } catch (error) {
//       setError(error.response?.data?.error || "An error occurred");
//     }
//     setLoading(false);
//   };
  

//   if (loadingData) {
//     return <Loader />;
//   }
//   if (errorData) {
//     return <Error error={errorData} />;
//   }
//     return (
//       <section className="bg-white dark:bg-gray-900">
//         <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
//           <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
//             Edit User Form
//           </h2>
//           <form onSubmit={handleSubmit} className="border-2 p-9 ">
//             <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//               <div className="w-full">
//                 <label
//                   htmlFor="First Name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   FIRST NAME
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   id="first-name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="First Name"
//                   value={firstname}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="Last Name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   LAST NAME
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   id="last-name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="Phone No"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   PHONE NO
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone-no"
//                   id="phone-no"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Phone Number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="Email ID"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   EMAIL ID
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Email ID"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="First Name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   ROLE
//                 </label>
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Role"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="Location"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   LOCATION
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   id="location"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Location"
//                   required
//                 />
//               </div>
//               <div className="w-full">
//                 <label
//                   htmlFor="Location"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   DEPARTMENT
//                 </label>
//                 <input
//                   type="text"
//                   name="department"
//                   id="department"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder="Department"
//                   required
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="inline-flex items-center sm:mt-6 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
//             >
//               Edit User
//             </button>
//           </form>
//         </div>
//       </section>
//     );
//   };
  
//   export default EditPage;
  