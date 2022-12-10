import { Box, Button, Flex, Heading, Input, Text, useColorModeValue } from "@chakra-ui/react"
import { AiOutlineMail, AiOutlineHeart } from "react-icons/ai"

export const Subscribe = () => {
    return (
        <Box margin={["20px", "80px"]}>
            <Box textAlign={"center"} >
                <Heading as='h1' p={5} size={["md", "xl"]}>Subscribe to Our Newsletter</Heading>
            </Box>
            <Flex border={"solid 1px #dbdbdc"} w={["95%", "90%", "50%"]} margin={"auto"} marginTop={"40px"} borderRadius={"5px"}>
                <Box margin={"auto"} padding={"5px"}>
                    <AiOutlineMail size={"25px"} color={"gray"} />
                </Box>

                <Input placeholder='Your email' border={"none"} />
                <Button bg={'#5570f0'}
                    color={"white"}
                    href={'#'}
                    p={"20px 30px"}
                    _hover={{
                        bg: '#2c4efa',
                    }}>Subscribe</Button>
            </Flex>
            <Box textAlign={"center"} margin={["10px", "20px", "80px"]}>
                <Text color={useColorModeValue('gray.600', 'white')}>© All rights reserved. Made with <AiOutlineHeart style={{ display: "inline", color: "#5570f0" }} /> by  Vineeth</Text>
            </Box>
        </Box >
    )
}