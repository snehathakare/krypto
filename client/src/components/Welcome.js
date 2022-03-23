import React from 'react'

const Welcome = () => {
    const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white text-sm font-light text-white";
    return (
        <div className="flex justify-around">
            <div>
                <h1 className="text-2xl">Send Crytos around the world</h1>
                <span>Explore Cryto currencies , Sell and Buy Cryptos with a click</span>
                <button className="m-3.5 bg-blue-700 text-white font-semibold py-2 px-4 rounded">Connect Wallet</button>
                <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                    <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                        Reliability
                     </div>
                    <div className={companyCommonStyles}>Security</div>
                    <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                        Ethereum
                    </div>
                    <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                        Web 3.0
                    </div>
                    <div className={companyCommonStyles}>Low Fees</div>
                    <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                        Blockchain
                    </div>
                </div>
            </div>

            <div>
                <div class="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 my-3.5 rounded flex-col items-center">
                    <p>Address</p>
                    <p>Ethereum</p>
                </div>

                <div className="p-5 sm:w-96 w-full flex flex-col justify-start bg-blue-400">
                    <input className="my-1.5 p-1.5 rounded bg-black" placeholder="Address To" />
                    <input className="my-1.5 p-1.5 rounded bg-black" placeholder="Amount ETH" />
                    <input className="my-1.5 p-1.5 rounded bg-black" placeholder="Keyword" />
                    <input className="my-1.5 p-1.5 rounded bg-black" placeholder="Enter Message" />
                </div>
            </div>
        </div >
    )
}

export default Welcome
