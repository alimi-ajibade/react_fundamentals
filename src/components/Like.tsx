import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [like, setLike] = useState(true);

    const toggle = () => {
        setLike(!like);
        onClick();
    };

    return like ? (
        <FaRegHeart color="red" size="25" onClick={toggle} />
    ) : (
        <FaHeart color="red" size="25" onClick={toggle} />
    );
};

export default Like;
