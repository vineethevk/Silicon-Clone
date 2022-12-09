import { LandingPages } from "./LandingPagesSession"
import Navbar from "./Navbar"
import { SiliconFeatures } from "./SiliconFeatures"
import { Slider } from './Slider'
import { Subscribe } from "./Subscribe"
export const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <LandingPages />
            <SiliconFeatures />
            <Subscribe />

        </>
    )
}