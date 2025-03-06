import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "View A. semester",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
      {
        name: "Create  A. semester",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "View A. faculty",
        path: "academic-faculty",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicSemester />,
      },
      {
        name: "View A. dept.",
        path: "academic-department",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. dept.",
        path: "create-academic-department",
        element: <CreateAcademicSemester />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: <CreateAdmin />,
      },
    ],
  },
];


