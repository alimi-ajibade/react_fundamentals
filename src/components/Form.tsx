import { FormEvent, useRef, useState } from "react";

// Getting input values using the (useRef) hook
// const Form = () => {
//     const nameRef = useRef<HTMLInputElement>(null);
//     const ageRef = useRef<HTMLInputElement>(null);
//     const person = { name: "", age: 0 };

//     const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();

//         if (nameRef.current !== null) person.name = nameRef.current.value;
//         if (ageRef.current !== null) ageRef.current.value;

//         console.log(person);
//     };

//     return (
//         <div className="container-sm">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                         Name
//                     </label>
//                     <input
//                         ref={nameRef}
//                         id="name"
//                         type="text"
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="age" className="form-label">
//                         Age
//                     </label>
//                     <input
//                         ref={ageRef}
//                         id="age"
//                         type="number"
//                         className="form-control"
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// Getting input values using (useState) hook, NOTE: causes rerendering
// const Form = () => {
//     const [person, setPerson] = useState({ name: "", age: "" });

//     const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();
//         console.log(person);
//     };

//     return (
//         <div className="container-sm">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                         Name
//                     </label>
//                     <input
//                         onChange={(event) =>
//                             setPerson({ ...person, name: event.target.value })
//                         }
//                         value={person.name} // This makes the input field a controlled component (React becomes the single source of truth)
//                         id="name"
//                         type="text"
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="age" className="form-label">
//                         Age
//                     </label>
//                     <input
//                         onChange={(event) =>
//                             setPerson({
//                                 ...person,
//                                 age: event.target.value,
//                             })
//                         }
//                         value={person.age}
//                         id="age"
//                         type="number"
//                         className="form-control"
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// Useing React Hook Form to get field values and perform form validation
// import { FieldValues, useForm } from "react-hook-form";

// interface FormData {
//     name: string;
//     age: number;
// }

// const Form = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<FormData>();

//     const onSubmit = (data: FieldValues) => console.log(data);

//     return (
//         <div className="container-sm">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                         Name
//                     </label>
//                     <input
//                         id="name"
//                         type="text"
//                         className="form-control"
//                         {...register("name", { minLength: 3, required: true })}
//                     />

//                     {errors.name?.type === "required" && (
//                         <p className="text-danger">This field is required.</p>
//                     )}
//                     {errors.name?.type === "minLength" && (
//                         <p className="text-danger">
//                             Name must be more than 3 characters.
//                         </p>
//                     )}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="age" className="form-label">
//                         Age
//                     </label>
//                     <input
//                         id="age"
//                         type="number"
//                         className="form-control"
//                         {...register("age")}
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// Forms with react-form-hook and zod
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    age: z
        .number({ invalid_type_error: "Age is required" })
        .min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>; // assigns the schema type to FormData

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <div className="container-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        {...register("name")}
                    />

                    {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age
                    </label>
                    <input
                        id="age"
                        type="number"
                        className="form-control"
                        {...register("age", { valueAsNumber: true })}
                    />

                    {errors.age && (
                        <p className="text-danger">{errors.age.message}</p>
                    )}
                </div>

                <button
                    disabled={!isValid}
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
