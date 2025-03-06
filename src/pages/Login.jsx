import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
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
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                            <div className='pt-3'>Don't have an account? <Link to={'/register'} className="link link-hover">Register now</Link></div>
                            <div className="form-control">
                                <button className="btn w-full rounded-md text-black bg-amber-100"><FcGoogle />Login with Google</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;