import Lottie from "lottie-react";
import errorPage from "../assets/Animation.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="max-w-full max-h-full align-middle flex-col flex justify-center items-center py-3">
            <div>
                <Lottie className="w-sm md:w-3xl lg:w-5xl" animationData={errorPage} />
            </div>
            <Link to={'/'} className="btn btn-primary text-white">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;