import { LandingPages } from "./LandingPagesSession"
import Navbar from "./Navbar"
import { SiliconFeatures } from "./SiliconFeatures"
import { Slider } from './Slider'
export const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <LandingPages />
            <SiliconFeatures />

        </>
    )
}