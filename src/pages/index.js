import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button} from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Box, Text } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
const IndexPage = (props) => (
  <Layout>
    <Grid templateColumns="repeat(4, 1fr)" gap={0}>
      <Box  h="100vh" bg="#f7931e" _hover={{ backgroundColor: '#fff',width:"50vw",flex: 3,transition: 1+"s"  }}>
       
      </Box>
      <Box  h="100vh" bg="#42210b" _hover={{ backgroundColor: '#fff',width:"50vw",flex: 3,transition: 1+"s"  }} ></Box>
      <Box  h="100vh" bg="#c1272d" _hover={{ backgroundColor: '#fff',width:"50vw",flex: 3,transition: 1+"s"  }} ></Box>
      <Box  h="100vh" bg="#f15a24" _hover={{ backgroundColor: '#fff',width:"50vw",flex: 3,transition: 1+"s"  }} ></Box>
    </Grid>
  </Layout>
)

export default IndexPage
