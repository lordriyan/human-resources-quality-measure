import { AiFillGithub, AiOutlineAlert } from "react-icons/ai";

export default function UnderDev() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white">
      <div className="container mx-auto px-10 py-2 flex gap-2 items-center pb-3">
        <AiOutlineAlert className="text-xl" />
        <div className="pt-1 flex-1">
          This website is under development, please be patient!
        </div>
        <div>
          <a
            href="https://github.com/lordriyan/human-resources-quality-measure"
            className="text-white flex gap-1 items-center no-underline hover:text-gray-300"
          >
            <AiFillGithub className="text-xl" />
            <div className="text-xs pt-0.5">Github</div>
          </a>
        </div>
      </div>
    </div>
  );
}
