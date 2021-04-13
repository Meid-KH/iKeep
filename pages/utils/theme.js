import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const theme = extendTheme({
	fonts: {
		heading: "Inter",
		body: "Inter",
	},
	colors: {
		main: {
			100: "#202020",
			200: "#424242",
		},
		text: {
			100: "#fff",
			200: "#d6d6d6",
		},
	},
});
export default theme;
