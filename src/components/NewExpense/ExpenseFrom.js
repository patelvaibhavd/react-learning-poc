import React , { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        //  1St Approch 
        setEnteredTitle(event.target.value);

        //  2nd Approch
        // setUserInput({
        //     ...userInput, 
        //     enteredTitle : event.target.value
        // });
        
        // 3rd Approch
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    };
    const amountChangeHandler = (event) => {
        //  1St Approch 
        setEnteredAmount(event.target.value);

        //  2nd Approch
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount : event.target.value
        // });
        
        // 3rd Approch
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    };
    const dateChangeHandler = (event) => {
        //  1St Approch 
        setEnteredDate(event.target.value);

        //  2nd Approch
        // setUserInput({
        //     ...userInput, 
        //     enteredDate : event.target.value
        // });
        
        // 3rd Approch
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title') {
    //         setEnteredTitle(value);
    //     } else if(identifier === 'date') {
    //         setEnteredDate(value);
    //     } else if(identifier === 'amount') {
    //         setEnteredAmount(value);
    //     }
    // }

    const addExpenseHandler = (event) => {
        event.preventDefault();
        const expense = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expense)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={addExpenseHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='input' value={enteredTitle} onChange={titleChangeHandler}></input>
                    {/* <input type='input' onChange={(event) => {inputChangeHandler('title', event.target.value)}}></input> */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01'></input>
                    {/* <input type='number' onChange={(event) => {inputChangeHandler('amount', event.target.value)}} min='0.01' step='0.01'></input> */}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate}  onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31'></input>
                    {/* <input type='date'  onChange={(event) => {inputChangeHandler('date', event.target.value)}} min='2019-01-01' max='2022-12-31'></input> */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;