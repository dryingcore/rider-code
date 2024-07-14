import { Box, Menu, MenuButton, Text, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = ({ language, onSelect }) => {
	return (
		<Box mb={4}>
			<Menu>
				<MenuButton as={Button}>{language}</MenuButton>
				<MenuList>
					{languages.map(([language, version]) => (
						<MenuItem key={language} onClick={() => onSelect(language)}>
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
