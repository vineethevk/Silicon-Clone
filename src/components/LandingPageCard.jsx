import { Image, Box, useColorModeValue, Heading, GridItem } from "@chakra-ui/react"


export const LandingPageCard = ({ data: { image, title } }) => {

    return (
        <div >
            <img src={image} width={"100%"} />
            <Heading as='h4' size={["sm", "md"]} p={2} _hover={{
                color: '#5570f0',
            }}>{title}</Heading>
        </div>
    )
}