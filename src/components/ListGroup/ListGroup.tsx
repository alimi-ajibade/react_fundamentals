import { useState } from "react";
// import "./ListGroup.css";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { GiNinjaHeroicStance } from "react-icons/gi";

interface Props {
    items: string[];
    header: string;
    onSelectItem: (item: string) => void;
}

// styled with vanilla css
// function ListGroup({ items, header, onSelectItem }: Props) {
//     // useState hook returns an with two values
//     // a stateful value and an updater function
//     let [selectIndex, setSelectIndex] = useState(-1);

//     return (
//         <>
//             <h1>List of {header}</h1>

//             {/* {anime_character.length === 0 ? (
//                 <div>No characters present </div>
//             ) : null} */}

//             {items.length === 0 && <p> No characters present </p>}

//             <ul className="list-group">
//                 {items.map((item, index) => (
//                     <li
//                         className={
//                             selectIndex === index
//                                 ? "list-group-item active"
//                                 : "list-group-item"
//                         }
//                         key={item.toLowerCase()}
//                         onClick={() => {
//                             setSelectIndex(index);
//                             onSelectItem(item);
//                         }}>
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// styled using css module
// function ListGroup({ items, header, onSelectItem }: Props) {
//     // useState hook returns an with two values
//     // a stateful value and an updater function
//     let [selectIndex, setSelectIndex] = useState(-1);

//     return (
//         <>
//             <h1>List of {header}</h1>

//             {/* {anime_character.length === 0 ? (
//                 <div>No characters present </div>
//             ) : null} */}

//             {items.length === 0 && <p> No characters present </p>}

//             <ul className={styles.listGroup}>
//                 {items.map((item, index) => (
//                     <li
//                         className={
//                             selectIndex === index
//                                 ? [styles.listGroupItem, styles.active].join(
//                                       " "
//                                   )
//                                 : styles.listGroupItem
//                         }
//                         key={item.toLowerCase()}
//                         onClick={() => {
//                             setSelectIndex(index);
//                             onSelectItem(item);
//                         }}>
//                         {item}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// styles using css in js (styled-component package)

const List = styled.ul`
    list-style: none;
    padding: 0;
    border: 0.05rem solid #3e4451;
    border-radius: 0.5rem;
`;

// Applying ($) before the Props properties, fixes the
// (unknown prop) error in the browser console
// when passing props to styled components
interface ListItemProps {
    $active: boolean;
    $lastItem: boolean;
}

const ListItem = styled.ul<ListItemProps>`
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-bottom: ${(props) => (props.$lastItem ? "0.05rem solid" : "none")};
    background-color: ${(props) => (props.$active ? "#0d6efd" : "none")};
    color: ${(props) => (props.$active ? "#fff" : "none")};
`;

function ListGroup({ items, header, onSelectItem }: Props) {
    // useState hook returns an with two values
    // a stateful value and an updater function
    let [selectIndex, setSelectIndex] = useState(-1);

    return (
        <>
            <h1>
                <GiNinjaHeroicStance /> List of {header}
            </h1>

            {/* {anime_character.length === 0 ? (
                <div>No characters present </div>
            ) : null} */}

            {items.length === 0 && <p> No characters present </p>}

            <List>
                {items.map((item, index) => (
                    <ListItem
                        $active={selectIndex === index}
                        $lastItem={index !== items.length - 1}
                        key={item.toLowerCase()}
                        onClick={() => {
                            setSelectIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;
