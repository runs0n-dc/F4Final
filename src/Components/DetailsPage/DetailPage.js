import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header";
import './detailsPage.css';

const DetailPage = () => {
    const { id } = useParams();
    const posts = useSelector((state) => state.posts);
    const post = posts.find((post) => post.id === parseInt(id, 10));

    if (!post) {
        return <div style={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>Post not found.</div>
        </div>

    }

    return (
        <div className="details-container">
            <Header />
            <div className="detail-card">
                <div className="card-body">
                    <h1 className="card-title">Detail's Page For Post With ID {post.id}</h1>
                    <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" className="card-img-top" />
                    <h2 className="card-subtitle">User ID: {post.userId}</h2>
                    <h2 className="card-subtitle">Title: {post.title}</h2>
                    <h2 className="card-subtitle">Body: {post.body}</h2>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;