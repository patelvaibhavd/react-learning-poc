import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            {/* <div>{props.data.date.toISOString()}</div> */}
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>$ {props.data.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;