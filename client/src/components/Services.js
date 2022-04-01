import React from 'react'

const Services = () => {
    return (
        <div className="flex items-stretch">
            <h1>Services that we provide</h1>
            <div className="flex">
                <div className="bg-indigo-200 rounded-md w-48 h-48">
                    <h3>
                        Security
                    </h3>
                    <span></span>
                </div>
                <div className="bg-indigo-200 rounded-md w-48 h-48">
                    <h3>
                        Best exchange rates
                    </h3>
                    <span></span>
                </div>
                <div className="bg-indigo-200 rounded-md w-48 h-48">
                    <h3>
                        Fast Transactions
                    </h3>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Services
