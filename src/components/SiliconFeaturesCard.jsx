import { Box, useColorModeValue, Heading, Text } from "@chakra-ui/react"


export const SiliconFeatureCard = ({ data: { icon, title, text } }) => {

    return (
        <Box padding={"20px"}
            _hover={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}>
            <Box w={"60px"} margin={"auto"} >
                <>{icon({ size: "90%", color: "#5570f0" })}</>
            </Box>
            <Box>
                <Heading as='h4' size={["sm", "md"]} p={2} _hover={{
                    color: '#5570f0',
                }}>{title}</Heading>
                <Text textAlign={"justify"} p={2} color={useColorModeValue('gray.600', 'white')}>{text}</Text>

            </Box>

        </Box >
    )
}