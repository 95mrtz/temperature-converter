import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Icons = () => {
  return (
    <ul className="list-none flex flex-row justify-around items-center">
      <li className="mx-2 md:mx-5">
        <a
          href="https://github.com/hctmanuelortiz"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-3xl text-purple-500" />
        </a>
      </li>
      <li className="mx-2 md:mx-5">
        <a
          href="https://twitter.com/hctmanuelortiz"
          target="_blank"
          rel="noreferrer"
          
        >
          <FaTwitter className="text-3xl text-purple-500" />
        </a>
      </li>
      <li className="mx-2 md:mx-5">
        {" "}
        <a
          href="https://www.linkedin.com/in/hctmanuelortiz/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl text-purple-500" />
        </a>
      </li>
    </ul>
  );
};

export default Icons;
