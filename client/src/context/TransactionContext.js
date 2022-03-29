import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { contractAddress, contractAbi } from './../utils/constants'

export const TransactionContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

    console.log("test", {
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setformData] = useState({ addressTo: '', amount: '', keyword: '', message: '' })


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
            if (!ethereum) return alert("Please install MetaMask.");
            //add transaction logic
            const { addressTo, amount, keyword, message } = formData
            getEthereumContract();
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const handleChange = (e, name) => {
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