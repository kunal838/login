import React,{useRef,useState} from 'react'
import "./Model.css"
import {db,storage} from "../utils/firebase"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from '@firebase/firestore';
import { ref ,getDownloadURL,uploadString} from '@firebase/storage';
function Model() {
    const filePickerRef = useRef(null);
    const [selected,setSelected] = useState(null);
    const [loading, setloading] = useState(false)
    const addImageToPost = (e) =>{
       const reader = new FileReader();
       if(e.target.files[0]){
           reader.readAsDataURL(e.target.files[0]);
       }
       reader.onload = (readerEvent)=>{
           setSelected(readerEvent.target.result);
       }
      console.log(selected);
    }
    const UploadPost = async () =>{
       /*  if(loading) return
        console.log("yeah");
        setloading(true); */
        try {
            const docRef = await addDoc(collection(db,'posts'),{
                timeStamp:serverTimestamp(),
                
            })  
            console.log("new doc added with ID" ,docRef.id);
            const imageRef = ref(storage,`posts/${docRef.id}/image`)
    
            await uploadString(imageRef,selected,"data_url").then(async snapshot =>{
                const downloadUrl = await getDownloadURL(imageRef);
                await updateDoc(doc(db,'posts',docRef.id),{
                    image:downloadUrl
                })
            })
            setSelected(null)
            alert("done")
        } catch (error) {
            alert(error)
        }
        
        
/* 
        console.log("new doc added with ID" ,docRef.id);
        const imageRef = ref(storage,`posts/${docRef.id}/image`)

        await uploadString(imageRef,selected,"data_url").then(async snapshot =>{
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(doc(db,'posts',docRef.id),{
                image:downloadUrl
            })
        }) */
       /*  setloading(false) */
        

        

    }
    return (
        <div >
           <input
           ref={filePickerRef}
            type="file"
            onChange={addImageToPost}
            
           />
          {selected?<img alt="pic" style={{
              height:400,
              width:'100%'
          }} 
          src={selected}
          
          />:null}
           <button onClick={UploadPost} >post</button>
        </div>
    )
}

export default Model
