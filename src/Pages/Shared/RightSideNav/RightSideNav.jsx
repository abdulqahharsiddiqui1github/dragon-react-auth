
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";



const RightSideNav = () => {
  return (
    <div>
      <div  className="p-4 space-y-3">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
         Google
        </button>
        <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
         Github
        </button>
      </div>
      {/* find on */}
      <div  className="p-4 ">
        <h2 className="text-2xl">Find Us On</h2>
        <a className="p-4 rounded-t-lg flex items-center text-lg border" href="">
            <FaFacebook className="mr-3"></FaFacebook>
            FaceBook
        </a>
        <a className="p-4 flex items-center text-lg border-x" href="">
            <FaTwitter className="mr-3"></FaTwitter>
            Twitter
        </a>
        <a className="p-4 rounded-b-lg flex items-center text-lg border" href="">
            <FaInstagram className="mr-3"></FaInstagram>
            Instagram
        </a>
      </div>
      {/* Q Zone */}
      <div  className="p-4 space-y-3">
        <h2 className="text-2xl">Q Zone</h2>
        <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
         Google
        </button>
        <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
         Github
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
