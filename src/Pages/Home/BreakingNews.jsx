import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <div className="btn btn-secondary">Breaking news</div>
      <Marquee
        className="text-3xl text-green-600"
        pauseOnHover={true}
        speed={100} gradient={true} 
      >
        <Link className="ml-12" to="/">
          I can be a React component, multiple React components, or just some
          text........................
        </Link>
        <Link className="ml-12" to="/">
          I can be a React component, multiple React components, or just some
          text........................
        </Link>
        <Link className="ml-12" to="/">
          I can be a React component, multiple React components, or just some
          text........................
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
