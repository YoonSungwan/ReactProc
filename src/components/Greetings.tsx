import React from "react";
import { InputSample } from "./InputSample";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: number;
    onClick: (name: string) => void;
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            this function is {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>{name}</button>
            </div>
            <InputSample></InputSample>
        </div>
    );
}

Greetings.defaultProps = {
    mark : '!'
}

export default Greetings;