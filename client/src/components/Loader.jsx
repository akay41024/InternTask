import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
