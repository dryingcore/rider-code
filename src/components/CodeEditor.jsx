import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

export const CodeEditor = () => {
	const editorRef = useRef();
	const [value, setValue] = useState("");

	const onMount = editor => {
		editorRef.current = editor;
		editor.focus();
	};

	return (
		<Box>
			<LanguageSelector />
			<Editor height="75vh" defaultLanguage="javascript" defaultValue="// some comment" theme="vs-dark" value={value} onChange={value => setValue(value)} onMount={onMount} />;
		</Box>
	);
};
