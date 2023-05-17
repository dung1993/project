import React, { useState, useEffect } from "react";

function ChildrenComponent(props) {
    const { caption, sayHi } = props;

    const { posts, setPosts } = useState([])
    const { keyword, setKetword } = useState();
    const { email, setEmail } = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(async (res) => {
                let data = await res.json();
                let result = [];
                if (keyword) {
                    result = data.filter(item => {
                        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                            item.body.toLowerCase().includes(body.toLowerCase())
                    })
                }
                else {
                    result = data;
                }
                setPosts = result;
            })
    }, [keyword])
    return (
        <div className="container">
            <div className="form-group">
                <form className="d-flex align-items-center">
                    <input type="search" className="form-control w-25 me-2"
                        placeholder="keyword"
                        onInput={(e) => setKeyword(e.target.value)}
                    />
                    <button className="btn btn-primary btn-sn">
                        <i className="fa fa-search me-2"></i>
                        Search
                    </button>
                </form>
            </div>
            <div>
                <button onClick={() => sayHi()}>Say Hi</button>
            </div>
            <div>
                <table className="table table-danger table-striped table-hover caption-top" >
                    <caption className="text-white">{caption}</caption>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ChildrenComponent;