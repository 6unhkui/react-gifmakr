import React from "react";

interface ConvertToGifProps {
    onCovert: () => void;
    gif: string;
}

const ConvertToGif: React.FC<ConvertToGifProps> = ({ onCovert, gif }) => {
    return (
        <section>
            <h3>Result</h3>
            <button onClick={onCovert}>Convert</button>
            {gif && <img src={gif} width={250} />}
        </section>
    );
};

export default ConvertToGif;
