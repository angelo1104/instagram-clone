import React, {useEffect, useState} from "react";
import './ImageUpload.css'
import {Button} from "@material-ui/core";
import {db, storage} from "../../firebase";
import firebase from "firebase";

function ImageUpload({username}) {
    const [caption ,setCaption] = useState('')
    const [progress,setProgress] = useState(0)
    const [image,setImage] = useState(null)

    const handleFileChange = e=>{
        if (e.target.files[0]){
            setImage(e.target.files[0])
            console.log(image)
        }
    }

    const handleUpload = ()=>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on('state_changed',(snapshot)=>{
            const uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

            setProgress(uploadProgress)
        },error=>{
            console.log(error)
        },()=>{
            storage.ref(`images`)
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection('posts')
                        .add({
                            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        })
                })

            setProgress(0)
            setCaption('')
            setImage(null)
        })
    }

    useEffect(()=>{
        console.log(progress)
    },[progress])

    return (
        <div className="image-upload">
            <div className='fixer-div'>
                <progress value={progress} max='100'/>

                <div className="image-upload-content">
                    <input className='caption-input' type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder='Enter a caption...'/>
                    <input className='file-upload-input' type="file" onChange={handleFileChange}/>

                    <Button className='image-upload-button' onClick={handleUpload}>
                        Upload
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ImageUpload