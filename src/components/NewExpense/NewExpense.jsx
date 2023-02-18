import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		saveExpenseData(expenseData)
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const expenseData = {
		title: enteredTitle,
		amount: enteredAmount,
		date: new Date(enteredDate),
	};

	const saveExpenseData=(enteredExpenseData)=>{
		const expenseData1={
			...enteredExpenseData,
			id:Math.random().toString()
		}
		props.onAddExpense(expenseData1)
	}

	return (
		<div className="new-expense">
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							onChange={titleChangeHandler}
							value={enteredTitle}
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							onChange={amountChangeHandler}
							value={enteredAmount}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							min="2019-01-01"
							max="2024-12-31"
							onChange={dateChangeHandler}
							value={enteredDate}
						/>
					</div>
					<div className="new-expense__actions">
						<button type="submit">Add Expense</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewExpense;
