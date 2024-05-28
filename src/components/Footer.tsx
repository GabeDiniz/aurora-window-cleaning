import { AiFillFacebook } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="text-4xl py-10 pl-10 flex flex-col gap-2 justify-center items-center bg-classicBlue text-laceWhite">
      <h1 className="uppercase">Get in touch</h1>
      <div className="flex gap-3">
        <a
          href="mailto:efaro@hotmail.com"
          className="hover:scale-125 transition-all"
        >
          <IoMdMail />
        </a>
        <a
          href="https://www.facebook.com/share/sHBNDYdLpXJx83SV/?mibextid=LQQJ4d"
          target="_blank"
          className="hover:scale-125 transition-all"
        >
          <AiFillFacebook />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
