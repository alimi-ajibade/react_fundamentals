// import ListGroup from "./components/ListGroup";
// import "./App.css";

import { useState } from "react";

// function App() {
//     let anime_character = ["Asta", "Yuri", "Naruto", "Eren", "Sung Jin-woo"];

//     const handleOnSelectItem = (item: string) => console.log(item);

//     return (
//         <div>
//             <ListGroup
//                 items={anime_character}
//                 header="Anime Characters"
//                 onSelectItem={handleOnSelectItem}
//             />
//         </div>
//     );
// }

// import Alert from "./components/Alert";

// function App() {
//     return (
//         <div>
//             <Alert>
//                 Hello <span style={{ fontWeight: "bold" }}>React World</span>
//             </Alert>
//         </div>
//     );
// }

// import { useState } from "react";
// import Button from "./components/Button";
// import Alert from "./components/Alert";

// function App() {
//     const [displayAlert, setDisplayAlert] = useState(false);

//     const handleOnClick = () => {
//         setDisplayAlert(true);
//     };

//     const handleOnClose = () => {
//         setDisplayAlert(false);
//     };

//     return (
//         <div>
//             {displayAlert && <Alert onClose={handleOnClose}> My Alert </Alert>}
//             <Button color="secondary" onClick={handleOnClick}>
//                 My Button
//             </Button>
//         </div>
//     );
// }

// import Button from "./components/Button";

// function App() {
//     return (
//         <div>
//             <Button color="secondary" onClick={() => {}}>
//                 My Button
//             </Button>
//         </div>
//     );
// }

// like excercise
// import Like from "./components/Like";

// function App() {
//     return (
//         <div>
//             <Like onClick={() => console.log("clicked")}></Like>
//         </div>
//     );
// }

// Update state varaibles that contain objects or arrays
// import { produce } from "immer";

// function App() {
//     const [bugs, setBug] = useState([
//         { id: 1, title: "Bug 1", fixed: false },
//         { id: 2, title: "Bug 2", fixed: false },
//     ]);

//     const handleClick = () => {
//         // setBug(
//         //     bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
//         // );

//         setBug(
//             produce((draft) => {
//                 const bug = draft.find((bug) => bug.id === 1);
//                 if (bug) bug.fixed = true;
//             })
//         );
//     };

//     return (
//         <div>
//             {bugs.map((bug) => (
//                 <p key={bug.id}>
//                     {" "}
//                     {bug.title} {bug.fixed ? "Fixed" : "New"}{" "}
//                 </p>
//             ))}
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// Shared Components
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";

// function App() {
//     const [cartItem, setCartItem] = useState(["Product 1", "Product 2"]);

//     return (
//         <div>
//             <NavBar cartItemCount={cartItem.length} />
//             <Cart cartItems={cartItem} onClear={() => setCartItem([])} />
//         </div>
//     );
// }

// Update State
// Excercise 1
// function App() {
//     const [game, setGame] = useState({
//         id: 1,
//         player: {
//             name: "John",
//         },
//     });

//     const handleClick = () => {
//         setGame({ ...game, player: { ...game.player, name: "Bob" } });
//     };

//     return (
//         <div>
//             <p>
//                 {game.id} {game.player.name}
//             </p>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }

// Excercise 2
// function App() {
//     const [pizza, setPizza] = useState({
//         name: "Spiccy Pepperoni",
//         toppings: ["Mushroom"],
//     });

//     const handleClick = () => {
//         setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//     };

//     return (
//         <div>
//             <p>
//                 {pizza.name}. Toppings: {pizza.toppings.join(" ")}
//             </p>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }

// Excercise 3
// import { produce } from "immer";

// function App() {
//     const [cart, setCart] = useState({
//         discount: 0.1,
//         items: [
//             { id: 1, title: "Product 1", quantity: 1 },
//             { id: 2, title: "Product 2", quantity: 1 },
//         ],
//     });

//     const handleClick = () => {
//         // setCart({
//         //     ...cart,
//         //     items: cart.items.map((item) =>
//         //         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//         //     ),
//         // });

//         setCart(
//             produce((draft) => {
//                 const item = draft.items.find((item) => item.id === 1);
//                 if (item) item.quantity++;
//             })
//         );
//     };

//     return (
//         <div>
//             {cart.items.map((item) => (
//                 <p key={item.id}>
//                     {item.title} Quantity: {item.quantity}{" "}
//                 </p>
//             ))}
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }

// Expandablle Component
import ExpandableText from "./components/ExpandableText";

function App() {
    return (
        <ExpandableText maxChar={50}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure
            ullam asperiores facere debitis nam odio earum, optio numquam
            similique recusandae eveniet ab velit hic odit! Iure nihil nam
            quidem voluptatibus cumque tempora deserunt labore? Eos, unde?
            Corrupti id fuga corporis asperiores, ipsa ratione expedita cum
            autem. Laborum nobis unde earum deleniti adipisci iusto voluptates,
            commodi ex illo, enim fugiat quae aut error nihil sint eius incidunt
            dolores voluptatem repellendus odio nulla non minima, praesentium
            ea. Error autem, repudiandae eveniet perspiciatis ab dolore nobis
            assumenda adipisci exercitationem ipsum reprehenderit laboriosam
            dolores incidunt vero veritatis nemo perferendis dolorum saepe
            accusantium sint! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Unde sint maxime nam et saepe modi ullam quam
            neque ipsum delectus eveniet quasi vero perferendis ratione quidem,
            repellendus minima iure dolorem voluptatum est deserunt? Suscipit
            reiciendis quibusdam amet excepturi iure cumque autem? Sapiente, est
            inventore? Impedit alias excepturi officiis quaerat nulla soluta
            reprehenderit esse provident illo suscipit eius id repellendus
            beatae non numquam laudantium cumque laborum ducimus, similique
            voluptatum nostrum blanditiis tempora nam ut. Magni eligendi officia
            molestiae in quia dolorum fugiat, fugit reiciendis deleniti
            repellendus libero beatae, reprehenderit dolore, rerum porro neque
            odit repellat veniam quos dicta sunt eum est. Dignissimos quidem
            tenetur error laudantium nemo itaque, reprehenderit soluta facilis
            perferendis fugit quaerat, velit dolorum nihil pariatur saepe porro
            illo neque quis doloribus odit totam voluptatibus! Culpa totam hic
            quam, aliquam deserunt ratione tempore magnam assumenda, facere,
            natus consequuntur dicta ullam maxime reiciendis repudiandae in.
            Natus odio perspiciatis amet deleniti, quo adipisci facere tempora
            omnis voluptatibus doloribus, rerum totam error fuga odit vitae
            obcaecati at minus! Facilis unde, quibusdam dignissimos libero
            tempora accusamus dolor minima nemo ullam quasi asperiores
            reprehenderit dolore labore atque quo ducimus voluptatum voluptates
            obcaecati dolorum architecto. Quasi voluptates consequuntur modi
            eligendi quaerat pariatur quam? Dolorum, libero.
        </ExpandableText>
    );
}

export default App;
