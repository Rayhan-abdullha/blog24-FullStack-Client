import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Contex";
import "./category.css";
const Categories = () => {
  const { dispatch, categorie } = useContext(Context);
  const location = useLocation()
  const path = location.pathname
  const search = location.search
  useEffect(() => {
    if (categorie.length === 0) {
      const categoriesData = async () => {
        const res = await axiosInstance.get("/categories");
        dispatch({ type: "FETCH_CAT", payload: res.data });
      };
      categoriesData();
    }
  }, []);
  return (
    <div className="tab">
      <ul className="tabList">
        <Link style={{background: (path == '/' && !search) && 'red'}} to={`/`} className="tablink">
          <li className="category">All Posts</li>
        </Link>
        {categorie.map((c, index) => (
          <Link style={{background: (search === `?cat=${c.name}`) && 'red'}} to={`/?cat=${c.name}`} key={index} className="tablink">
            <li className="category">{c.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
