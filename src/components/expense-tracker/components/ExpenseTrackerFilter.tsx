import expenseCategories from "../categories";

interface Props {
    onChangeCategory: (category: string) => void;
}

const ExpenseTrackerFilter = ({ onChangeCategory }: Props) => {
    return (
        <div className="container-sm">
            <select
                className="form-select mt-5"
                onChange={(event) => onChangeCategory(event.target.value)}>
                <option value="">All Categories</option>
                {expenseCategories.map((category) => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ExpenseTrackerFilter;
