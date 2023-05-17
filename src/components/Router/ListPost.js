import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spiner from "./Spiner";

function ListPost() {
    const [state, setState] = useState({
        posts: "[]",
        loading: false
    });
    useEffect(() => {
        setState({ ...state, loading });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(async (res) => {
                let data = await res.json();
                setState({
                    ...state,
                    posts: data,
                    loading: false
                })
            })
    }, [])

    const { posts, loading } = state
    return (
        <div className="container">
            {
                loading ? <Spinner /> : (
                    <div>
                        <table className="table table-striped table-hover" >
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                            <td>
                                                <Link to={`/post-detail/${post.id}`}>
                                                    <i role="button" className="fa fa-eye"></i>
                                                </Link>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default ListPost;