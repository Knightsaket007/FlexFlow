import React, { useState } from 'react';
import 'flexflow-react/style.css';
import Script from 'flexflow-react/Script';
import './Playground.css'
import MonacoEditor from '@monaco-editor/react';
function Playground() {
  Script()
 
  const [code, setCode] = useState('<!--write code here--> \n<h2 class="cen-flx-h">Welcome to FlexFlow Playground</h2>\n<h4 class="cust-mg-t--20 clr-prime cen-flx-h">New way to write CSS make you haste</h4>\n<!--All Flexflow style use can use with auto content loading--> ');

  // Function to handle changes in the code editor
  const handleCodeChange = (value, event) => {
    setCode(value);
  };
 
  // Function to render the output based on user code
  const renderOutput = () => {
    // return <div>{code}</div>;
    return <div dangerouslySetInnerHTML={{ __html: code }} />;
  };



  return (
    <>
    {/* <Navbar/> */}
    <div className="playground-container">
      <div className="code-editor">
        <MonacoEditor
        className='MonacoEditor'
          width="50vw"
          height="80vh"
          language="html"
          value={code}
          onChange={handleCodeChange}
          theme="vs-dark"
          defaultValue='<!--write code here--> \n<h2 class="cen-flx-h">Welcome to FlexFlow Playground</h2>\n<h4 class="cust-mg-t--20 clr-prime cen-flx-h">New way to write CSS make you haste</h4>\n<!--All Flexflow style use can use with auto content loading--> '
        />
      </div>
      <div className="output-preview">
        {renderOutput()}
      </div>
    </div>
</>
    
  );
}

export default Playground;
