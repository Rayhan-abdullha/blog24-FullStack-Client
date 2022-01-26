import React, {useState, useContext, useEffect} from 'react';
import './Write.css';
import {Context} from '../../context/Contex';
import axios from 'axios';
import photo from '../../imgaes/profile.jpg'
import Spinner from '../../compontents/Spinner/Spinner';

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [categories, setCategories] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)
    const [spinner, setSpinner] = useState(true)
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            userName: user.userName,
            title,
            desc,
            categories: categories || selected
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename) 
            data.append("file",file)
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch(err) {

            }
        }
        try {
            const res = axios.post("/posts", newPost)
            window.location.replace("/")
        }catch(err) {
            
        }
    }
    const [selected, setSelected] = useState("others")
    const handleChange = (e) => {
        setSelected(e.target.value)
        setCategories(e.target.value)
    }

    // spinner
    useEffect(() => {
        setTimeout(() => {
            setSpinner(false)
        },500);
    }, [])
    return (
        <div className="write">
            {
                file && <img className="writeImg" src={URL.createObjectURL(file)} alt=""/>
            }
            
            <form onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="category" className="catLabel">
                        <span className="category">Select your Categories : </span>
                    </label>
                    <br/>
                    <select value={selected} onChange={handleChange} id="category">
                        <option value="others">others</option>
                        <option value="programming">programming</option>
                        <option value="music">music</option>
                        <option value="politics">politics</option>
                        <option value="movies">movies</option>
                    </select>
                </div>
                <div className="writeFormGroup">
                <span style={{fontSize: "18px", color: "white", marginRight: "5px"}}>Select Photo</span>
                    <label htmlFor="fileInput">
                        <img className="signInImg" src={photo} alt=""/>
                    </label>
                </div>
                <div className="writeFormGroup">
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                    <input className="writeInput" autoFocus={true} type="text" placeholder="Enter blog title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" placeholder="Tell your story . . ." onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                {
                    file ? <button className="writeSubmit2" type="submit">Publish</button>
                    : <button className="writeSubmit" type="submit">Publish</button>
                }
                
            </form>
            {
                spinner && <Spinner/>
            }
        </div>
    )
}
