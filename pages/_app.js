import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import Layout from "./components/layout";
import theme from "./utils/theme";
import "@fontsource/inter";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<ScaleFade>
					<Component {...pageProps} />
				</ScaleFade>
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
