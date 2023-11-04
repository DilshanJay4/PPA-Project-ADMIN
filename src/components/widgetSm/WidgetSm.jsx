import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {

  const [users , setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async () => {
      try{
        const res = await userRequest.get('users/?new=true');
        setUsers(res.data);
      }catch{}
    };
    getUsers();
  } , []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

      {users.map(user => (

            <li className="widgetSmListItem" key={user._id}>
              <img
                src={user.img || 'https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png'}
                alt=""
                className="widgetSmImg"
                />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{ user.username }</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />Display
              </button>
            </li>

      ))}

      </ul>
    </div>
  );
}
