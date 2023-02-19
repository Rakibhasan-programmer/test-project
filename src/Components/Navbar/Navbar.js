import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Main from '../Main/Main';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 w-[100%] mt-4">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost font-semibold text-justify text-3xl">HeadPhone</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    <input type="text" placeholder="Search Product" className="input input-bordered" />
                </div>
                    <div className="">
                        <div><FontAwesomeIcon className='fa-3x text-violet-500' icon={faEnvelope} /></div>
                    </div>
                </div>
            </div>
            <Main />
        </div>
    );
};

export default Navbar;