import { Image } from "@chakra-ui/react"

export const LandingPageCard = ({ pic }) => {
    return (
        <Box>
            <Image src={pic} />
        </Box>
    )
}