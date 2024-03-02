import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Prop {
    children: ReactNode;
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "link";
    onClick: () => void;
}

// const Button = ({ children, color = "primary", onClick }: Prop) => {
//     return (
//         <button className={`btn btn-${color}`} onClick={onClick}>
//             {children}
//         </button>
//     );
// };

// styled with css modules
const Button = ({ children, color = "primary", onClick }: Prop) => {
    return (
        <button
            className={[styles.Btn, styles[`btn-${color}`]].join(" ")}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
