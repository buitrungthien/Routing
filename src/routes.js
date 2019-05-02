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
        component: LogIn
    },
    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '',
        name: 'home',
        components: {
            default: SlideBar,
            header: NavBar,
            footer: Footer
        }
    },
    {
        path: '/form',
        name: 'form',
        components: {
            default: Form,
            header: NavBar
        }
    },
    {
        path: '/table',
        name: 'table',
        components: {
            default: Table,
            header: NavBar
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
        ]
    },
    {
        path: '*',
        component: Error
    }
];