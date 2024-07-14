import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export const CodeEditor = () => {
	const [value, setValue] = useState("");
	return (
		<Box>
			<Editor height="75vh" defaultLanguage="javascript" defaultValue="// some comment" theme="vs-dark" value={value} onChange={value => setValue(value)} />;
		</Box>
	);
};
