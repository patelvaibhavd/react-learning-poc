import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem data={props.items[0]}></ExpenseItem>
            <ExpenseItem data={props.items[1]}></ExpenseItem>
            <ExpenseItem data={props.items[2]}></ExpenseItem>
            <ExpenseItem data={props.items[3]}></ExpenseItem>
        </Card>
    );
}

export default Expenses;