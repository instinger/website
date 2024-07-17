import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {app} from "../../firebase";
import {getDownloadURL,getStorage,ref,uploadBytesResumable} from "firebase/storage";

const UpdateListing = () => {

    const {currentUser} = useSelector((state)=>state.user);

    const navigate = useNavigate();
    const params = useParams();

    const [files,setFiles] = useState([]);

    const [formData,setFormData] = useState({
        imageUrl:[],
        name:"",
        description:"",
        author:"Instinger",
        type:"",
        date:"",
    })

    const [imageUploadError,setImageUploadError] = useState(false);
    const [uploading,setUploading] = useState(false);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    console.log(formData,"formData");


    useEffect(()=>{
            const fetchListing = async()=>{
                const listingId = params.listingId;
                const res = await fetch(`https://backend.instinger.com/api/listing/get/${listingId}`);
                const data = await res.json();

                if(data.success === false){
                    console.log(data.message,"error");
                    return;
                }

                setFormData(data.data);
            }

            fetchListing();
    },[])


    const handleImageSubmit = (e) => {
        if(files.length>0){
            setUploading(true);
            setImageUploadError(false);
           
            const file = files[0];

            storeImage(file).then((url)=>{
                setFormData({
                    ...formData,
                    imageUrl:[url]
                })
                setImageUploadError(false);
                setUploading(false);
            }).catch((error)=>{
                setImageUploadError("image upload failed");
                setUploading(false);
            })
        }
        else{
            setImageUploadError("please select an image for upload");
            setUploading(false);
        }
    }

    const storeImage = async(file) => {

        return new Promise((resolve,reject)=>{
            const storage = getStorage(app);
            const fileName = new Date().getTime()+ file.name;
            const storageRef = ref(storage,fileName);
            const uploadTask = uploadBytesResumable(storageRef,file);

            uploadTask.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                console.log("upload is "+progress+"% done");
            },
            (error) => {
                reject(error);
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
                    resolve(downloadURL);
                })
            }
            )
        })

    }


    const handleRemoveImage = () => {
        setFormData({
            ...formData,
            imageUrl:[]
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(formData.imageUrl.length<1)
                return setError("upload image for listing");

            setLoading(true);
            setError(false);

            const res = await fetch(`https://backend.instinger.com/api/listing/update/${params.listingId}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    ...formData,
                    userRef:currentUser.data._id,
                })
            })

            const data = await res.json();
            setLoading(false);

            if(data.success===false){
                setError(data.message);
                return;
            }

            console.log(data,"data");
            navigate(`/listing/${data.data._id}`);

        } catch (error) {
            setError(error.error);
            setLoading(false);
        }
    }





    return(
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className="font-semibold text-3xl text-center my-7">Update Listing</h1>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">

                <div className="flex flex-col gap-4 flex-1">

                    <input type="text" placeholder="name" id="name" maxLength="62" minLength="10" required 
                    className="p-3 border rounded-lg outline-none" onChange={handleChange} value={formData.name}/>
                    <textarea placeholder="description" id="description" required
                     className="p-3 border rounded-lg outline-none" onChange={handleChange} value={formData.description}/>                    
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-2 flex-wrap">
                            <input type="text" placeholder="Blog category" id="type" required maxLength="10"
                             className="p-3 border rounded-lg outline-none" onChange={handleChange} value={formData.type}/>
                            <input type="date" placeholder="date" required id="date"
                             className="p-3 border rounded-lg outline-none" onChange={handleChange} value={formData.date}/>
                            <input type="text" placeholder="author" required maxLength="50" minLength="10" id="author"
                             className="p-3 border rounded-lg outline-none" onChange={handleChange} value={formData.author}/>
                        </div>
                    </div>
                   
                </div>
                <div className="flex flex-col flex-1 gap-4">
                        <p className="font-semibold">Images : 
                            <span className="ml-2 font-normal text-gray-600"> The image will be cover (max 1)</span>
                        </p>
                        <div className="flex gap-4">
                            <input onChange={(e) =>setFiles(e.target.files) } className="p-3 border border-gray-300 rounded-w-full" type="file" id="image" accept="image/*"/>
                            <button disabled={uploading} onClick={handleImageSubmit} type="button" className="p-3 text-green-700 border border-green-700 rounded-lg uppercase hover:shadow-lg disabled:opacity-80">{uploading?"uploading...":"Upload"}</button>
                        </div>
                        <p className="text-red-700 text-sm">{imageUploadError && imageUploadError}</p>

                        {
                           formData.imageUrl.length>0 && (
                              formData.imageUrl.map((url,index)=>(
                                    <div key={url} className="flex justify-between gap-4 items-center">
                                        <img src={url} alt="listing image" className="h-20 w-20 object-contain rounded-lg"/>
                                        <button onClick={()=>handleRemoveImage(index)} type="button" className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75">
                                            Delete
                                        </button>
                                    </div>
                              ))
                           )
                        }

                        <button disabled={loading || uploading} className="p-3 bg-slate-700 rounded-lg text-white uppercase gap-4 hover:opacity-90 disabled:opacity-80">{loading?"updating...":"Update Listing"}</button>
                        {error && <p className="text-red-500">{error}</p>}
                </div> 
            </form>
        </main>

    )
}


export default UpdateListing;