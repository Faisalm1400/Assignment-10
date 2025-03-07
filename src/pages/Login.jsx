import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const Login = () => {
    const { userLogin, setUser, handleGoogleSignIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                alert('user logged in successfully')
            })
            .catch((error) => {

                const errorMessage = error.message;
                // toast.error(`${errorMessage}`, {
                //     position: "top-center",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "dark",
                // });
                console.log(errorMessage)
            });
    }

    const handleGoogleSignInClick = () => {
            handleGoogleSignIn()
                .then((result) => {
                    // console.log(result.user);
                    setUser(result.user);
                    // navigate(location?.state ? location.state : "/");
                    alert('user sign in successfully')
                })
                .catch((error) => {
                    console.log(error)
                    // toast.error(`${error.message}`, {
                    //     position: "top-center",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "dark",
                    // });
                    setUser(null);
                })
        };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className='form'>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <button className="btn btn-neutral mt-4">Login</button>
                                <div className='pt-3'>Don't have an account? <Link to={'/register'} className="link link-hover">Register now</Link></div>
                                <div className="form-control">
                                    <button onClick={handleGoogleSignInClick} className="btn w-full rounded-md text-black bg-amber-100"><FcGoogle />Login with Google</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;