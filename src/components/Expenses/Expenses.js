import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filterdYear, setFilteredYear] = useState('2020');
    const [filterdInfoText, setFilteredInfoText] = useState('2019, 2021 & 2022');

    const getFilterSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        if(selectedYear === '2019') {
            setFilteredInfoText('2020, 2021, 2022')
        } else if(selectedYear === '2020') {
            setFilteredInfoText('2019, 2021, 2022')
        } else if(selectedYear === '2021') {
            setFilteredInfoText('2019, 2020, 2022')
        } else {
            setFilteredInfoText('2020, 2020, 2022')
        }
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterdYear} getFilterSelectedYear={getFilterSelectedYearHandler}></ExpensesFilter>
            <p>Date for years {filterdInfoText} hidden</p>
            <ExpenseItem data={props.items[0]}></ExpenseItem>
            <ExpenseItem data={props.items[1]}></ExpenseItem>
            <ExpenseItem data={props.items[2]}></ExpenseItem>
            <ExpenseItem data={props.items[3]}></ExpenseItem>
        </Card>
    );
}

export default Expenses;