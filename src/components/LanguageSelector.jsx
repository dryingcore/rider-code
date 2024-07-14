import { Box, Menu, MenuButton, Text, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = () => {
	return (
		<Box>
			<Text mb={2} fontSize={"lg"}>
				Language
			</Text>
			<Menu>
				<MenuButton as={Button}>Javascript</MenuButton>
				<MenuList>
					{languages.map(([language, version]) => (
						<MenuItem key={language}>
							{language}
							&nbsp;
							<Text as="span" color="gray.500" fontSize="sm">
								{version}
							</Text>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};
