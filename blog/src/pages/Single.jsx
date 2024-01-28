import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
        <div className="user">
          <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
          <div className="info">
            <span>Keerti</span>
            <p >Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
              <img src={Delete} alt="" /> 
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit dolorum est quas suscipit magnam ullam voluptas maxime esse, explicabo doloremque quo illo facilis dolorem eveniet laboriosam voluptates expedita quidem. Eveniet unde porro aperiam dignissimos error dolores laudantium, ex atque perferendis numquam nihil, saepe vero beatae. Reprehenderit, harum.Incidunt distinctio numquam, exercitationem quis beatae animi laborum id deleniti molestiae aliquam repudiandae laudantium dolores, culpa doloribus nesciunt tempora, architecto officia? Officia odio ratione ex sapiente recusandae libero ipsa non reprehenderit corrupti, mollitia, explicabo et! Quod quidem sed, quasi amet soluta inventore rerum totam corrupti nulla repellendus, libero temporibus suscipit laborum minus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias et enim impedit! Sunt ut quis incidunt odit laudantium in iusto distinctio vel odio officiis soluta animi earum minima, unde sit fugit. Libero iste mollitia, ea non consequatur possimus, blanditiis veniam atque temporibus animi nisi ducimus at rerum quae voluptates esse eaque nesciunt inventore deleniti odio assumenda nostrum quia. Ea, autem tenetur quas rem aliquid eius qui consequatur debitis neque voluptatum, officiis fugit aut earum esse vero a alias! Nam aspernatur sed at ipsum dolorem, enim accusamus pariatur ea tenetur officiis, earum velit natus, quia delectus accusantium fugiat debitis aperiam.</p>
      </div>
      
      <Menu/>
    </div>
  )
}

export default Single
