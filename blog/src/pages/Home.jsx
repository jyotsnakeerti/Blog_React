import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sitt. Vel, enim.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim.",
            img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit elit. Vel, enim.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim.",
            img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id: 3,
            title: "Lorem ipsum dot. Vel, enim.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim.",
            img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        },
        {
            id: 4,
            title: "Lorem ipsum isicing elit. Vel, enim.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, enim.",
            img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        },

    ];
    return (
        <div className='home'>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="post-img" />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read more</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
