import { Box, Menu, MenuButton, Text, MenuItem, MenuList, Button, ChevronDownIcon } from "@chakra-ui/react";

export const LanguageSelector = () => {
	return (
		<Box>
			<Text mb={2} fontSize={"large"}>
				Language
			</Text>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Javascript
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
					<MenuItem>Attend a Workshop</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
};
