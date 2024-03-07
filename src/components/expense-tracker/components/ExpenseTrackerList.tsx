interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const ExpenseTrackerList = ({ expenses, onDelete }: Props) => {
    return (
        <div className="mb-3 mt-3 container-sm">
            {expenses.length !== 0 && (
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
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.description}</td>
                                <td>${expense.amount}</td>
                                <td>{expense.category}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => onDelete(expense.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>
                                $
                                {expenses.reduce(
                                    (acc, expense) => expense.amount + acc,
                                    0
                                )}
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    );
};

export default ExpenseTrackerList;
