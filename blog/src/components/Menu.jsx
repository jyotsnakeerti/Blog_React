import React from 'react'

const Menu = () => {
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
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
