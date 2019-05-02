import NavBar from './components/NavBar'
import SlideBar from './components/SlideBar'
import Footer from './components/Footer'
import Form from './components/Form'
import Table from './components/Table'
import User from './components/user/User'
import UserList from './components/user/UserList'
import UserDetail from './components/user/UserDetail'
import Error from './components/Error'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

export const routes = [
    {
        path: '/log-in',
        component: LogIn,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/sign-up',
        component: SignUp,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '',
        name: 'home',
        components: {
            default: SlideBar,
            header: NavBar,
            footer: Footer
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/form',
        name: 'form',
        components: {
            default: Form,
            header: NavBar
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/table',
        name: 'table',
        components: {
            default: Table,
            header: NavBar
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/user',
        components: {
            default: User,
            header: NavBar
        },
        children: [
            {
                path: '',
                component: UserList,
                children: [
                    {
                        path: ':id',
                        name: 'userList',
                        component: UserDetail
                    }
                ]
            }
        ],
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        component: Error
    }
];