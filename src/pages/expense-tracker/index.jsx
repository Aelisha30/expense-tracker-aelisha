import { useState } from "react";
import {useAddTransaction}  from "../../hooks/useAddTransaction"
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { useDeleteData } from "../../hooks/useDeleteTransaction";
import "./index.css"

export const ExpenseTracker = ()=>{
    const { addTransaction } = useAddTransaction();
    const { transactions,transactionTotals } = useGetTransactions();
    const{name,profilePhoto}=useGetUserInfo();
    const navigate=useNavigate()
    const[description,setDescription]=useState("");
    const[transactionAmount,setTransactionAmount]=useState(0);
    const[transactionType,setTransactionType]=useState("expense");
    const{deleteData,loading,error}=useDeleteData();
    const {balance,income,expenses}=transactionTotals;
    const onSubmit=(e)=>{
        e.preventDefault();
        addTransaction({
            description,
            transactionAmount,
            transactionType,
        
        });
        setDescription("")
        setTransactionAmount("")
       
    };
    const signUserOut =async()=>{
        try{
               await signOut(auth)
               localStorage.clear()
               navigate("/")
           }catch(error){
               console.error(error)
           }
    
       }
    const handleDelete=(docID)=>{
       deleteData(docID)
    }
    return (
        <>
        <div className="expense-tracker">
          <div className="container">
            <h1>{name}'s Expense Tracker <img className="icon" src="./projectIcon.png"/></h1>
            <div className="balance">
                <h3> <i className="fa-solid fa-money-check"></i> Your Balance</h3>
                {balance>=0?(<h2>₹{balance}</h2>):(<h2>-₹{balance*-1}</h2>)}
                
            </div>
            <div className="summary">
                <div className="income">
                    <h4><i className="fa-regular fa-credit-card"></i> Income</h4>
                    <p>₹{income}</p>
                </div>
                <div className="expenses">
                    <h4><i className="fa-solid fa-money-bill-transfer"></i> Expenses</h4>
                    <p>₹{expenses}</p>
                </div>
            </div>
            
            <form className="add-transaction" onSubmit={onSubmit}>
                <i className="fa-solid fa-clipboard"><input className="input" type="text" placeholder="Description" value={description} required onChange={(e)=>setDescription(e.target.value)}/></i>
                <i className="fa-solid fa-wallet"><input className="input" type="number" placeholder="Amount" value={transactionAmount} required onChange={(e)=>setTransactionAmount(e.target.value)}/></i>
               
                <input className="radio" type="radio" id="expense" value="expense" onChange={(e)=>setTransactionType(e.target.value)}
                checked={transactionType==="expense"} />
                <label htmlFor="expense">Expense</label>
                <input className="income" type="radio" id="income" value="income" onChange={(e)=>setTransactionType(e.target.value)} 
                checked={transactionType==="income"}/>
                <label htmlFor="income">Income</label>
                <button className="green" type="submit"> <i className="fa-solid fa-plus"></i>  Add Transaction</button>
                
            </form>
        </div>
        {profilePhoto && <div className="profile">
            <img className="profile-photo" src={profilePhoto} />
            <button className="sign-out-button" onClick={signUserOut}>Sign Out</button>
            </div>}

    </div>
    <div className="transactions">
        <h3 className="t-info">Transactions <img className="icon" src="./transactions.png"/></h3>
        <ul>
            {transactions.map((transaction)=>{
                const{description,transactionAmount,transactionType}=transaction
                return(
                    <li>
                        <h4 className="info">{description}  <button className="delete" onClick={()=>handleDelete(transaction.id)}>Delete <i className="fa-solid fa-trash"></i></button></h4>
                        <p>
                        
                            ₹{transactionAmount} <i className="fa-solid fa-arrow-right"></i> <label style={{color:transactionType==="expense"?"red":"green"}}>{transactionType}</label>
                            <hr></hr>
                        </p>
                    </li>
                )
            })}
        </ul>
        
    </div>
    </>
    

    );
};
    
    
