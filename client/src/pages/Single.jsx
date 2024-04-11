import React from 'react';
import Profile from "../img/profile.png";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src={Profile}alt="" />
          <div className="info">
            <span>Mike</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}> 

            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Natus doloribus corrupti explicabo, aperiam quidem magnam numquam totam reprehenderit quibusdam ducimus animi omnis ipsum 
          doloremque facere aliquam assumenda debitis dolorum sequi.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto consequuntur itaque fuga officiis quasi dolorem,
             obcaecati voluptas reiciendis repellendus cum officia minima
              excepturi inventore beatae quaerat laudantium sit! Maxime, et? <br />
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga 
               dolorum nobis quas sapiente maxime quaerat ratione, ut ullam 
               facilis repellendus libero, voluptas quisquam rem nisi cumque eveniet <br />
                tempora doloremque praesentium. Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Nihil, delectus est eligendi, expedita sunt eos iusto illo excepturi animi,
                 ipsa nostrum natus obcaecati recusandae? Cumque ipsa ipsum excepturi vitae itaque.</p>
      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default Single