import {About} from "../components/About";
import React from "react";
import {YoutubeVideo} from "../components/YoutubeVideo";
import {SocialsLink} from "../components/SocialsLink";

export const Home = () => {
    return (
        <div>
            <About />
            <YoutubeVideo />
            <SocialsLink />
        </div>
    )
}