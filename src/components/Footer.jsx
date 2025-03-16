import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 px-20">
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a className="link link-hover" href="https://github.com/Faisalm1400"><FaGithub /></a>
                        <a className="link link-hover" href="https://www.facebook.com/faisal.rahman.1400"><FaFacebookSquare /></a>
                        <a className="link link-hover" href="https://www.instagram.com/faisalm1400/"><FaInstagram /></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;