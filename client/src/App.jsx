import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <div className="dark:bg-[#111827] min-h-[100vh]">
        <Navbar />
        <Table />
      </div>
    </>
  );
};

export default App;
