import { Box, Menu, MenuButton, Text, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = () => {
	const [language, setLanguage] = useState(languages[0][0]);

	return (
		<Box mb={4}>
			<Menu>
				<MenuButton as={Button}>{language}</MenuButton>
				<MenuList>
					{languages.map(([language, version]) => (
						<MenuItem key={language} onClick={() => setLanguage(language)}>
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
