import React from 'react'

const Nav = () => {
    return (
        <div className="w-full flex justify-between text-white">
            <h1 className="pl-10 py-5 text-2xl">KRYPT</h1>
            <ul className="flex">
                <li className="px-10 py-5">Market</li>
                <li className="px-10 py-5">Exchange</li>
                <li className="px-10 py-5">Tutorial</li>
                <li className=""><button class="m-3.5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Login
                </button></li>
            </ul>
        </div>
    )
}

export default Nav
