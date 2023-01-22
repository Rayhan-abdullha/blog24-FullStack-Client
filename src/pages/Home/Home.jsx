import React, {useState, useEffect, useContext} from 'react'
import Header from '../../compontents/header/Header';
import Posts from '../../compontents/posts/Posts';
import './home.css'
import { axiosInstance } from '../../config';
import { Context } from '../../context/Contex';
import Spinner from '../../compontents/spinner/Spinner';
import Categories from '../../compontents/categories/Categories';
export default function Home() {
    const {dispatch, allPosts} = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (allPosts.length === 0) {
            const fetchPost = async () => {
                try {
                    setLoading(true)
                    const res = await axiosInstance.get("/posts")             
                    dispatch({type: "FETCH_POST", payload: res.data});
                    setLoading(false)
                    setError("")
                } catch (e){
                    setError("Somthing went wrong")
                    setLoading(false);
                }
            }
            fetchPost()
        }
    }, [])
    return (
        <React.Fragment>
            <Header/>
            <div className="container home">
                <h2 className='posts'>Read Posts</h2>
                <p className='post_sub'>Enjoy all your favourite Blogs</p>
                <Categories/>
                {
                    !loading ? <Posts/> : <Spinner/>
                }
            </div>
            
        </React.Fragment>
    )
}
