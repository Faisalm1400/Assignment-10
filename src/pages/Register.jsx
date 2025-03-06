import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        
        if (!/(?=.*?[A-Z])/.test(password)) {
            alert('Password should contain one  uppercase letter or more');
            return;
        }

        if (!/(?=.*[a-z])/.test(password)) {
            alert('Password should contain one  lowercase letter or more');
            return;
        }
        if (!/(?=.{6,})/.test(password)) {
            alert('Password should be 6 characters or longer');
            return;
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="form">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="Name" name='name' />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' />
                                <label className="fieldset-label">PhotoUrl</label>
                                <input type="text" className="input" placeholder="photoUrl" name='photo' />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' />
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                <div className='pt-3'>Already have an account? <Link to={'/login'} className="link link-hover">Login</Link></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;