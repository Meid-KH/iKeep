import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import { Container, Flex, Box, ChakraProvider } from "@chakra-ui/react";

import theme from "../utils/theme";

const Layout = ({ children }) => {
	return (
		<>
			<ChakraProvider theme={theme}>
				<Flex height="100vh" py="3rem" bg="main.100" color="text.200">
					<Box
						width="150px"
						bg="main.200"
						p="4"
						borderTopRightRadius="lg"
						borderBottomRightRadius="lg"
					>
						<Sidebar />
					</Box>
					<Box flex="1" px="5">
						<Header />
						<Box bg="main.200" borderRadius="lg" p="4">
							<main>{children}</main>
							<Footer />
						</Box>
					</Box>
				</Flex>
			</ChakraProvider>
		</>
	);
};

export default Layout;
