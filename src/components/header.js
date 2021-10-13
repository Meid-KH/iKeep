import { SearchIcon } from "@chakra-ui/icons";
import { Box, Heading, Flex, Avatar, IconButton } from "@chakra-ui/react";

function Header() {
	return (
		<Box as="header" bg="main.200" p={4} mb="2rem" p="4" borderRadius="lg">
			<Flex justify="space-between">
				<Heading as="h1" size="lg">
					iKeep
				</Heading>
				<IconButton
					bg="grey.500"
					aria-label="Search database"
					icon={<SearchIcon />}
				/>
				<Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
			</Flex>
		</Box>
	);
}

export default Header;
