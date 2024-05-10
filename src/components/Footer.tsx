import { AiFillFacebook } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 pl-10 flex flex-col gap-2 justify-center bg-slate-900 text-laceWhite">
      <h1 className="text-4xl ">Get in touch</h1>
      <p className="text-base ">efaro@hotmail.com</p>
      <a
        href="https://www.facebook.com/share/sHBNDYdLpXJx83SV/?mibextid=LQQJ4d"
        className=" text-4xl"
      >
        <AiFillFacebook />
      </a>
    </footer>
  );
};
//
export { Footer };
