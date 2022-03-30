import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { contractAddress, contractAbi } from './../utils/constants'

export const TransactionContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setformData] = useState({ addressTo: '', amount: '', keyword: '', message: '' })
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

    const checkIfWalletIsConnected = async () => {
        if (!ethereum) return alert('Please install Metamask')
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        console.log(accounts)
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const sendTransaction = async () => {
        try {
            if (ethereum) {
                //add transaction logic
                const { addressTo, amount, keyword, message } = formData
                const transactionContract = getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount)
                ethereum
                    .request({
                        method: 'eth_sendTransaction',
                        params: [
                            {
                                from: currentAccount,
                                to: addressTo,
                                value: parsedAmount._hex,
                                gas: '0x2710',
                            },
                        ],
                    })

                const transactionHash = transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);

                const transactionCount = await transactionContract.getTransactionCount();

                setTransactionCount(transactionCount.toNumber());
                window.location.reload();
            } else {
                alert("Please install metamask!")
            }

        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const handleChange = (e, name) => {
        //get data from form
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, sendTransaction, formData, currentAccount, setformData, handleChange }}>
            {children}
        </TransactionContext.Provider>
    );
};