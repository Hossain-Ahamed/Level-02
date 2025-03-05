import { Layout, Menu } from 'antd';
import { generateSidebarItems } from '../../utils/sideBarItemGenerator';
import { adminPaths } from '../../routes/admin.routes';

import { FacultyPaths } from '../../routes/faculty.routes';
import { StudentPaths } from '../../routes/student.routes';
import { UserRole } from '../../assets/constant';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';

const {Sider} = Layout;
const Sidebar = () => {
  const user= useAppSelector(selectCurrentUser);
  let sidebarItems;
  switch (user!.role) {
    case UserRole.ADMIN:
      sidebarItems= generateSidebarItems(adminPaths,UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sidebarItems= generateSidebarItems(FacultyPaths,UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      sidebarItems= generateSidebarItems(StudentPaths,UserRole.STUDENT);
      break;
  }

  
    return (
        <Sider
        style={{paddingTop:'60px'}}
          breakpoint="lg"
          collapsedWidth="0"
          // onBreakpoint={(broken) => {
          //   console.log(broken);
          // }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
          // }}
        >
          <div className="demo-logo-vertical" />
  
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems}
          />
        </Sider>
    );
};

export default Sidebar;