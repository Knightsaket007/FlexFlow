import React, { useEffect } from 'react'
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import 'flexflow-react/style.css';
import Script from 'flexflow-react/Script';
function Buttons() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    Script()
    return (
        <>
            <h2>Buttons</h2>
            <div className='btn-container cen'>
                <h5>Filled</h5>
                <code >btn-outlined bg-[color_name]</code>

                <div className='flx-container'>

                    <button class="btn-outlined bg-prime">button</button><br />
                    <button class="btn-outlined bg-berry">button</button><br />
                    <button class="btn-outlined bg-orange">button</button><br />
                    <button class="btn-outlined bg-grapes">button</button><br />
                    <button class="btn-outlined bg-banana">button</button><br />
                    <button class="btn-outlined bg-apple">button</button><br />
                    <button class="btn-outlined bg-stawberry">button</button><br />
                    <button class="btn-outlined bg-gray">button</button><br />
                    <button class="btn-outlined bg-gray-dark">button</button><br />
                    <button class="btn-outlined drk">button</button><br />
                    <button class="btn-outlined wht ">button</button><br />
                </div>

                <br />
                <br />
                <h5>Outlined</h5>
                <code>btn-filled bg-[color_name]</code>
                <div className='flx-container'>

                    <button class="btn-filled bg-prime">button</button><br />
                    <button class="btn-filled bg-berry">button</button><br />
                    <button class="btn-filled bg-orange">button</button><br />
                    <button class="btn-filled bg-grapes">button</button><br />
                    <button class="btn-filled bg-banana">button</button><br />
                    <button class="btn-filled bg-apple">button</button><br />
                    <button class="btn-filled bg-stawberry">button</button><br />
                    <button class="btn-filled bg-gray">button</button><br />
                    <button class="btn-filled bg-gray-dark">button</button><br />
                    <button class="btn-filled bg-dark">button</button><br />
                    <button class="btn-filled bg-white">button</button><br />
                </div>

                <br />
                <br />
                <h5>Upload</h5>
                <div className='flx-container' style={{ padding:"10px"}}>
                    <label for="file" class="btn-upload-image-black cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                    <label for="file" class="btn-upload-image-white cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                    <label for="file" class="btn-upload-video-black cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                    <label for="file" class="btn-upload-video-white cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                    <label for="file" class="btn-upload-file-black cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                    <label for="file" class="btn-upload-file-white cust-h-30 cust-w-80"></label>
                    <input type="file" id="file" />
                </div>

<p className='p-doc'>Upload buttons comes whith binary colors i.e black and white</p>
<p className='p-doc'>File-type of 3 types (image, video, file)</p>
<p className='p-doc'>Remember! this will only apply on input with type file and with label belogs to that input</p>
<code>btn-upload</code><br/>
<code>btn-upload-[file-type]-[binary-color]</code>
<h6>code example</h6>
<pre>
    <code className='language-html'>
        {`
        <label for="file" class="btn-upload-image-white cust-h-30 cust-w-80"></label>
        <input type="file" id="file" />
        `}
    </code>
</pre>

            </div>
        </>
    )
}

export default Buttons