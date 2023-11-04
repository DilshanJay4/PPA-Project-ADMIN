import "./sidebar.css";
import {
  LineStyle,
  // Timeline,
  // TrendingUp,
  PermIdentity,
  Storefront,
  BarChart,
} from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className={`sidebarListItem ${location.pathname === '/' ? 'active' : ''}`}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            {/* <Link to="/analytics" className="link">
              <li className={`sidebarListItem ${location.pathname === '/analytics' ? 'active' : ''}`}>
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="link">
              <li className={`sidebarListItem ${location.pathname === '/sales' ? 'active' : ''}`}>
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className={`sidebarListItem ${location.pathname === '/products' ? 'active' : ''}`}>
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className={`sidebarListItem ${location.pathname === '/products' ? 'active' : ''}`}>
                <Storefront className="sidebarIcon" />
                Orders
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className={`sidebarListItem ${location.pathname === '/reports' ? 'active' : ''}`}>
                <BarChart className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
