import React, { useEffect } from 'react'
import './DocPages.css'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
function GettingStart() {

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h2>Getting Start</h2>
            <h4>Installation</h4>
            <pre>
                <code className="language-bash">
                    {`npm i flexflow-style`}
                </code>
            </pre>
            <br />
            <p class="p-doc">Add stylesheet to main html file</p>
            <pre>
                <code className="language-html">
                    {`<link rel="stylesheet" href="node_modules/flexflow-style/style.css">`}
                </code>
            </pre>
            <br />
            <p class="p-doc">Add script to main html file</p>
            <pre>
                <code className="language-html">
                    {`<script src="node_modules/flexflow-style/script.js" async></script>`}
                </code>
            </pre>
            <br />
            <br />

            <h4>Installation for React (JSX)</h4>
            <p class="p-doc">Installation for JSX is quit similar. It directly install inside node_modules dependencies</p>
            <pre>
                <code className="language-bash">
                    {`npm i flexflow-react`}
                </code>
            </pre>
            <br />
            <p class="p-doc">Note! Script() call should place inside React component. This will ensure to run all custom styling flexible and smoothly</p>
            <pre>
                <code className="language-javascript">
                    {`import Script from 'flexflow-react/Script';
import 'flexflow-react/style.css';
function App() {
    Script()
    
      return (
         <h1>Welcome to FlexFLow</h1>
      )}
`}
                </code>
            </pre>

            <br />
            <h6>Another way to use flexflow to download rar file and place the folder inside React public folder, and give path to script and stylesheet with %PUBLIC_URL% prefix to apply style globaly</h6>

        </>
    )
}

export default GettingStart