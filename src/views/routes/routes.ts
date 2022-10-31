import i18n from 'configs/i18n'
import classDetailContainer from 'containers/ClassesDetailContainer'
import ClassesManagementContainer from 'containers/ClassesManagementContainer'
import SubjectDetailContainer from 'containers/SubjectDetailContainer'
import UserDetailContainer from 'containers/UserDetailContainer'
import UsersManagementContainer from 'containers/UsersManagementContainer'
import SubjectsManagement from 'views/pages/subjects/SubjectsManagement'
import Dashboard from '../pages/Dashboard'
import {
  ClassesManagementIcon,
  DashboardIcon,
  ManageIcon,
  SubjectIcon,
  UsersManagementIcon
} from './IconRoutes'

export const ADMIN_ROUTE = '/admin'
export const routesName = {
  DASHBOARD: '/dashboard',
  USERS_MANAGEMENT: '/users-management',
  MANAGEMENT: '/management',
  CLASSES_MANAGEMENT: '/classes-management',
  SUBJECTS_MANAGEMENT: '/subjects-management',
  USER_DETAIL: '/users-management',
  LOGIN: '/login'
}
const routes = [
  {
    id: 1,
    title: i18n.t('sideBar.dashboard.txtDashboard'),
    icon: DashboardIcon(),
    path: routesName.DASHBOARD,
    component: Dashboard
  },
  {
    id: 2,
    title: i18n.t('sideBar.usersManagement.txtUsersManagement'),
    icon: UsersManagementIcon(),
    path: routesName.USERS_MANAGEMENT,
    component: UsersManagementContainer
  },
  {
    id: 3,
    title: 'Management',
    icon: ManageIcon(),
    path: routesName.MANAGEMENT,
    subRoutes: [
      {
        id: 31,
        title: 'Classes Management',
        icon: ClassesManagementIcon(),
        path: routesName.CLASSES_MANAGEMENT,
        component: ClassesManagementContainer
      },
      {
        id: 32,
        title: 'Subjects Management',
        icon: SubjectIcon(),
        path: routesName.SUBJECTS_MANAGEMENT,
        component: SubjectsManagement
      }
    ]
  }
]

const childrenRoutes = [
  {
    id: 11,
    title: 'Users',
    path: routesName.USER_DETAIL.concat('/:id'),
    component: UserDetailContainer
  },
  {
    id: 12,
    title: 'Class Detail',
    path: routesName.CLASSES_MANAGEMENT.concat('/:id'),
    component: classDetailContainer
  },
  {
    id: 13,
    title: 'Subject Detail',
    path: routesName.CLASSES_MANAGEMENT.concat('/:classId').concat(
      '/:subjectId'
    ),
    component: SubjectDetailContainer
  }
]

export { routes, childrenRoutes }
