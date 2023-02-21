import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.67,
		date: new Date(2021, 1, 31),
	},
	{ id: "e2", title: "New TV", amount: 799.67, date: new Date(2023, 1, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 1, 1),
	},
	{ id: "e5", title: "New Desk", amount: 450, date: new Date(2023, 6, 14) },
	{
		id: "e6",
		title: "New Computer",
		amount: 1550,
		date: new Date(2022, 5, 14),
	},
	{ id: "e7", title: "Keyboard", amount: 50, date: new Date(2022, 1, 14) },
	{ id: "e8", title: "Cooker", amount: 300, date: new Date(2021, 12, 12) },
	{
		id: "e9",
		title: "Dyson Air Purifier",
		amount: 800,
		date: new Date(2023, 5, 1),
	},
	{ id: "e10", title: "Laptop", amount: 450, date: new Date(2020, 4, 14) },
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
