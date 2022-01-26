import React,{useState,useEffect} from 'react'
import Sidebar from '../../compontents/Sidebar/Sidebar';
import Spinner from '../../compontents/Spinner/Spinner';
export default function About() {
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setSpinner(false)
        },500);
    }, [])
    return (
        <div className="about">
            <Sidebar/>
            {
                spinner && <Spinner/>
            }
        </div>
    )
}
