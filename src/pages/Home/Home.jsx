import React, {useState, useEffect} from 'react'
import Header from '../../compontents/Header/Header';
import Posts from '../../compontents/Posts/Posts';
import Sidebar from '../../compontents/Sidebar/Sidebar';
import './Home.css'
import { useLocation } from 'react-router';
import notfound from '../../imgaes/notFound.svg'
import Spinner from '../../compontents/Spinner/Spinner';
import { axiosInstance } from '../../config';

export default function Home() {
    const [post, setPost] = useState([])
    const location = useLocation()
    const {search} = location;
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axiosInstance.get("/posts"+search)             
            setPost(res.data);
        }
        fetchPost()
    }, [search])

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false)
        },500);
    }, [])
    
    return (
        <React.Fragment>
            <Header/>
            <div className="home">
                {post.length > 0 ? <Posts post={post}/> :
                    <Spinner/>
                }
                <Sidebar/>
            </div>
            
        </React.Fragment>
    )
}
