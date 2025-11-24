import React from "react";

export const YoutubeVideo = () => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nAwLnKPM4rk?si=TWMkqMjn9eyoG9Yz"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
        </div>
    )
}