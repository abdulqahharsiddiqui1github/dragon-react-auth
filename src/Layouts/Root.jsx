import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins max-w-6xl mx-auto">
            this is root componennt
            <Outlet></Outlet>
        </div>
    );
};

export default Root;