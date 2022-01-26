import React, {useState, useEffect} from 'react'
import Header from '../../compontents/Header/Header';
import Posts from '../../compontents/Posts/Posts';
import Sidebar from '../../compontents/Sidebar/Sidebar';
import axios from 'axios'
import './Home.css'
import { useLocation } from 'react-router';
import notfound from '../../imgaes/notFound.svg'
import Spinner from '../../compontents/Spinner/Spinner';

export default function Home() {
    const [post, setPost] = useState([])
    const location = useLocation()
    const {search} = location;
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("/posts"+search)             
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
                    <div className="blogError">
                        <h3>No Blog Here</h3>
                        <img src={notfound} alt="No blog post here"/>
                    </div>
                }
                <Sidebar/>
            </div>
            {
                spinner && <Spinner/>
            }
        </React.Fragment>
    )
}
