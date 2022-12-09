import { Box, Image } from "@chakra-ui/react"
import picture from "../assets/Slider.png"

export const Slider = () => {
    return (
        <Box>
            <Image src={picture} w={["250%", "100%"]} />
        </Box>
    )
}