import React from 'react';
import ExpenseForm from './ExpenseFrom';
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()};
        props.onAddExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;