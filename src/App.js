import { useState } from "react";
import { marked } from "marked";
import './App.scss';

// a header (H1 size), a sub header (H2 size), a link, inline code,
// a code block, a list item, a blockquote, an image, and bolded text
function App() {
  const [text,setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**


  
  
  `);
  marked.setOptions({
    breaks:true
  })

  return (
    <div className="App">
      <div className="container">
        <div className="editorWrap">
          <div className="toolbar">Editor</div>
      <textarea 
        id="editor" 
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      </div>
      <div className="previewWrap">
        <div className="toolbar1">Previewer
      <div id="preview" dangerouslySetInnerHTML={{__html:marked(text)}}></div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
