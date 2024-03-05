interface Expense {
    description: string;
    amount: number;
    category: string;
}

interface Props {
    filter: string;
    expenses: { description: string; amount: number; category: string }[];
    onDelete: (expense: Expense) => void;
}

const ExpenseTrackerList = ({ filter, expenses, onDelete }: Props) => {
    const tableData =
        filter === "All Categories"
            ? expenses
            : expenses.filter((expense) => expense.category === filter);

    const totalExpense = () => {
        let total = 0;
        tableData.forEach((item) => (total += item.amount));

        return total;
    };

    return (
        <div className="mb-3 mt-3 container-sm">
            {tableData.length !== 0 && (
                <table className="table table-bordered mt-5">
                    <thead>
                        <tr>
                            <th className="col">Description</th>
                            <th className="col">Amount</th>
                            <th className="col">Category</th>
                            <th className="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.description}</td>
                                <td>${expense.amount}</td>
                                <td>{expense.category}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => onDelete(expense)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        <tr>
                            <td>Total</td>
                            <td>${totalExpense()}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ExpenseTrackerList;
