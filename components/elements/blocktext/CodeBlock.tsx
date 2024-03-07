import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div>
      <p>{value.filename}</p>
      <Refractor language={value.language} value={value.code} />
    </div>
  );
}
