import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchPosts } from '../../redux/actions';
import './hompage.css';
import Header from '../Header';
import './spinner.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <div className="loading-spinner">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>;
    }

    if (error) {
        return <div className="error-message">
            Error: {error}
        </div>;
    }


    return (
        <div className="container">
            <Header />
            <div className="card-container">
                {posts.map((post) => (
                    <div className="card" key={post.id}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
                        <div className="card-body">
                            <p>User ID: {post.userId}</p>
                            <h3>
                                Title:{" "}
                                <Link to={`/item/${post.id}`}>
                                    {post.title.length > 20 ? `${post.title.slice(0, 20)}...` : post.title}
                                </Link>
                            </h3>
                            <p>
                                Body:{" "}
                                {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
                            </p>
                            {post.body.length > 100 && (
                                <p>
                                    <Link to={`/item/${post.id}`}>Read More...</Link>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default HomePage;
