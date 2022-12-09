import { Box, Grid, Heading } from "@chakra-ui/react"
import { BsFillBootstrapFill, BsFillFileEarmarkBreakFill, BsPhoneFill, BsHandIndexThumbFill } from "react-icons/bs";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from "react-icons/io"
import { TbBrandJavascript } from "react-icons/tb"
import { SiliconFeatureCard } from "./SiliconFeaturesCard";
export const SiliconFeatures = () => {
    const Data = [
        {
            id: 1,
            icon: BsFillBootstrapFill,
            title: "Built with Bootstrap 5",
            text: "Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library."
        },
        {
            id: 2,
            icon: BsFillFileEarmarkBreakFill,
            title: "Detailed Documentation",
            text: "Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage."

        },
        {
            id: 3,
            icon: BsPhoneFill,
            title: "Mobile Freindly Interface",
            text: "It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens."
        },
        {
            id: 4,
            icon: BsHandIndexThumbFill,
            title: "Touch-Enabled Sliders",
            text: "In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider."
        },
        {
            id: 5,
            icon: IoLogoCss3,
            title: "W3C Valid HTML Code",
            text: "All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core."
        },
        {
            id: 6,
            icon: IoLogoJavascript,
            title: "Kick-Start Your Development",
            text: "Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation."

        },
        {
            id: 7,
            icon: IoLogoSass,
            title: "Easy to Customize with Sass",
            text: "Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world."
        },
        {
            id: 8,
            icon: TbBrandJavascript,
            title: "Future Proof Java-Script",
            text: "Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules."
        }
    ]
    return (
        <Box>
            <Box textAlign={"center"}>
                <Heading as='h1' p={5} size={["md", "lg"]}>More Silicon Features</Heading>
            </Box>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} m={["50px", "80px"]} gap={6}>
                {Data.map((e) => (<SiliconFeatureCard data={e} key={e.id} />))}
            </Grid>
            <hr></hr>
        </Box>
    )
}