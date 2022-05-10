
import "./DocumentVerification.css";
import Navbar from "../../Navbar/Navbar";

const DocumentVerification=()=>{
    return(  
        <div className="parent">
            <Navbar/>
            <div className="verifydoc">
                <div className="fileupload">
                    <p className="heading">Document to be verified:</p>
                    <div className="file-upload">
                    <input type="file" id="file-upload"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentVerification;