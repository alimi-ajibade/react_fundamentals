import { useState } from "react";

interface Props {
    children: string;
    maxChar?: number;
}

// const ExpandableText = ({ children, maxChar = 10 }: Props) => {
//     const [charLength, setCharLength] = useState(maxChar);

//     const handleClick = () => {
//         charLength < children.length
//             ? setCharLength(children.length)
//             : setCharLength(maxChar);
//     };

//     return (
//         <>
//             <div>
//                 {charLength < children.length
//                     ? children.slice(0, charLength) + " ..."
//                     : children.slice(0, charLength)}
//             </div>

//             <button onClick={handleClick}>
//                 {charLength < children.length ? "more" : "less"}
//             </button>
//         </>
//     );
// };

const ExpandableText = ({ children, maxChar = 10 }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    if (children.length <= maxChar) return <p>{children}</p>;

    const text = isExpanded ? children : children.slice(0, maxChar);

    return (
        <div>
            {text}...
            <button onClick={handleClick}>
                {isExpanded ? "less" : "more"}
            </button>
        </div>
    );
};

export default ExpandableText;
