import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"



export const LandingPages = () => {
    const images = []
    return (
        <Box textAlign='center'>
            <Heading as='h1' p={5}>Landing Pages</Heading>
            <Text color={useColorModeValue('gray.600', 'white')}>Choose from pre-built layouts of our unique landing pages</Text>
        </Box>
    )
}