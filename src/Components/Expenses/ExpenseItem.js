import ExpenseDate from './ExpenseDate';
import React , {useState} from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props) {

    const [title,setTitle] = useState(props.title);
  
    const clickEventHandler = () => {
        setTitle("updated");
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickEventHandler}>click here</button>
        </Card>);
}
export default ExpenseItem