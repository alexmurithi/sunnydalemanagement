import React from 'react';
import {Editor} from '@tinymce/tinymce-react';

const SunnyEditor =()=>{

    const handleEditorChange =(e)=>{
        e.target.getContent()
    }
    return(
        <Editor
            apiKey="xocojcyru08ix1f5gzp3uea1wrs1ezzxpnf9xj1ep04qq2ae" 
            init={{
                height:200,
                menubar:false,
                plugins:[
                'advlist autolink lists link image', 
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount'
                ],
                toolbar:
                'undo redo | formatselect | bold italic | \n'+
                'alignleft aligncenter alignright | \n'+
                'bullist numlist outdent indent | help'
            }}
            onchange={handleEditorChange} 
        />
    )
}

export default React.memo(SunnyEditor);