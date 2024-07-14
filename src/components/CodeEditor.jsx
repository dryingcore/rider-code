import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

export const CodeEditor = () => {
	return (
		<Box>
			<Editor height="75vh" defaultLanguage="javascript" defaultValue="// some comment" theme="vs-dark" />;
		</Box>
	);
};
