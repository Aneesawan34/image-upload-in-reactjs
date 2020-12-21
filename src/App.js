import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [toast, setToast] = useState('');
  const fileSelectedHandler = (e)=>{
    setSelectedFile(e.target.files[0]);
  }

  const fileUploadHandler = async()=>{
    console.log("upload: ", selectedFile);
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    try {
      //put image upload API in url
      let url = '';
      const res = await axios.post(url, fd);
      const data = await res.data;
      console.log("Data: ", data);
      setToast("Image is Uploaded Successfully");
      setTimeout(() => {
      setToast('');
      }, 1000);
    } catch (error) {
      console.log("Error: ", error);
      setToast("Image is not Uploaded");
      setTimeout(() => {
      setToast('');
      }, 1000);
    }

  }
  return (
    <div className="App">
        <input type="file" onChange={fileSelectedHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
        <div>
          {
            toast && 
          <p>{toast}</p>
          }
        </div>
    </div>
  );
}

export default App;
