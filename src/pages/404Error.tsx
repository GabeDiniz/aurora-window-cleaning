import { Navbar } from "@components";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-slate-900">
        <h1 className="text-5xl">OOPS!</h1>
        <p>[Error 404] You're not supposed to be here... 🤔</p>
        <Link className="mt-5" to="/">
          <button className="border-white">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export { ErrorPage };
