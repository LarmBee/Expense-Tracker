import React,{useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css'

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
	{ id: "e4", title: "New Desk", amount: 450, date: new Date(2023, 1, 14) },
];

function App() {
	
	const [expenses,setExpenses]=useState(DUMMY_EXPENSES)

	const addExpenseHandler=(expense)=>{
		setExpenses(prevExpenses=>{
			return[expense,...prevExpenses]
		})
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
