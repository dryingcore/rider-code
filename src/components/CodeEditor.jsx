import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

export const CodeEditor = () => {
	const editorRef = useRef();
	const [value, setValue] = useState("");

	const onMount = editor => {
		editorRef.current = editor;
		editor.focus();
	};

	return (
		<Box>
			<Editor height="75vh" defaultLanguage="javascript" defaultValue="// some comment" theme="vs-dark" value={value} onChange={value => setValue(value)} onMount={onMount} />;
		</Box>
	);
};
