import React from "react";

interface heading {
    word: string;
    paragraph: string;
}

export default function Head({word, paragraph} : heading) {
    return(
        <div className="font-verdana w-full p-3">
            <h2>{word}</h2>
            <p>{paragraph}</p>
        </div>
    )
}