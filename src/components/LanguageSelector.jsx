import { Box, Menu, MenuButton, Text, MenuItem, MenuList, Button, ChevronDownIcon } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

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
					{languages.map(([language, version]) => (
						<MenuItem key={language}>
							{language}
							&nbsp;
							<Text as="span" color="gray.500">
								{version}
							</Text>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};
