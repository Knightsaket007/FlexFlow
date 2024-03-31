import React, { useEffect } from 'react'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
function FontWeight() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
  return (
<>
<h2>font-weight</h2>
<p className='p-doc'>weight range(100-900 [gaps of 100])</p>
<code>txt-wt-[weight_value]</code>
<h6>code example</h6>
<pre>
    <code className='language-html'>
       {`<p class="txt-wt-500">Hello World</p>`}
    </code>
</pre>
</>
    )
}

export default FontWeight