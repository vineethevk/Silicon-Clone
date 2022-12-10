import { Box, Grid, GridItem, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { LandingPageCard } from "./LandingPageCard";
import "./LandingPage.css"



export const LandingPages = () => {
    const Data = [
        {
            id: 1,
            title: "Mobile App Showcase",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/app-showcase.jpg"
        }
        , {
            id: 2,
            title: "SaaS v.1",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v1.jpg"
        },
        {
            id: 3,
            title: "SaaS v.2",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/saas-v2.jpg"
        }
        ,
        {
            id: 4,
            title: "Financial Consulting",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/financial.jpg"
        },
        {
            id: 5,
            title: "Medical",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/medical.jpg"
        },
        {
            id: 6,
            title: "Digital Agency",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/digital-agency.jpg"
        },
        {
            id: 7,
            title: "Conference",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/conference.jpg"
        },
        {
            id: 8,
            title: "IT (Software) Company",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/software-company.jpg"
        },
        {
            id: 9,
            title: "Blog Homepage",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/blog-homepage.jpg"
        },
        {
            id: 10,
            title: "Blog Homepage",
            image: "https://silicon.madrasthemes.com/wp-content/uploads/2022/01/blog-homepage.jpg"
        }
    ]
    return (
        <Box marginTop={["20px", "50px"]}>
            <Box textAlign='center'>
                <Heading as='h1' p={5}>Landing Pages</Heading>
                <Text color={useColorModeValue('gray.600', 'white')}>Choose from pre-built layouts of our unique landing pages</Text>
            </Box>
            <div className="grid-area">
                {Data.map((e) => {
                    return (<LandingPageCard data={e} key={e.id} />)
                })}
            </div>
        </Box>
    )
}