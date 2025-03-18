import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { userLogin, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                form.reset();
                navigate(location?.state ? location.state : "/");
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://crowdcube-server-lyart.vercel.app/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('sign in info updated in db', data)
                    })
                toast.success('User logged in successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // console.log(user)
            })
            .catch((error) => {

                const errorMessage = error.message;

                toast.error(`${errorMessage}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // console.log(errorMessage)
            });
    }

    const handleGoogleSignInClick = () => {
        handleGoogleSignIn()
            .then((result) => {
                // console.log(result.user);
                setUser(result.user);
                navigate(location?.state ? location.state : "/");
                const email = result?.user?.email;
                const createdAt = result?.user?.metadata?.creationTime;
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const googleInfo = { email, createdAt, lastSignInTime };

                // Save or update user info in the database
                fetch('https://crowdcube-server-lyart.vercel.app/users', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(googleInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.upsertedId) {
                            toast.success('User logged in successfully', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: false,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                        }
                    })
                    .catch((error) => {
                        const errorMessage = error.message;

                        toast.error(`${errorMessage}`, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    });

                    toast.success('User logged in successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;

                toast.error(`${errorMessage}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setUser(null);
            })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Login to use more features.
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