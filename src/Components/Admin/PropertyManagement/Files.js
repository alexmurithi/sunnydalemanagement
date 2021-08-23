import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';

class PropertyFiles extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            files:[]
        };
        
    }

    handleChange(files){
        this.setState({
            files:files
        });
    }
    
    render() {
        return(
            <>
             {console.log("Files :",this.state.files)}
                <DropzoneArea 
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp','image/jpg']}
                    onChange={this.handleChange.bind(this)}
                    showFileNames
                    filesLimit={5} 
                />
            </>
        )
    }
}

export default React.memo(PropertyFiles);