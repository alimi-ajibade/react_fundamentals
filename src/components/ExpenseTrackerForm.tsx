import { ChangeEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    onSubmit: (data: FieldValues) => void;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const schema = z.object({
    description: z
        .string()
        .min(3, { message: "Description must be at least 3 characters" }),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(0, { message: "Amount must be more than 0" }),

    category: z.string().min(3, { message: "Description is required" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTrackerForm = ({ onSubmit, onChange }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <div className="container-sm">
            <form
                onSubmit={handleSubmit((data: FieldValues) => {
                    onSubmit(data);
                    reset();
                })}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        id="description"
                        type="text"
                        className="form-control"
                        {...register("description")}
                    />

                    {errors.description && (
                        <p className="text-danger">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        className="form-control"
                        {...register("amount", { valueAsNumber: true })}
                    />

                    {errors.amount && (
                        <p className="text-danger">{errors.amount.message}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        id="category"
                        className="form-select"
                        defaultValue=" "
                        {...register("category")}>
                        <option value=" "> </option>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>

                    {errors.category && (
                        <p className="text-danger">{errors.category.message}</p>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <select
                id="category"
                className="form-select mt-5"
                defaultValue="All category"
                onChange={onChange}>
                <option value="All Categories">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
        </div>
    );
};

export default ExpenseTrackerForm;
