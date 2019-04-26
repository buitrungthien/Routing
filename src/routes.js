import NavBar from './components/NavBar'
import SlideBar from './components/SlideBar'
import Footer from './components/Footer'
import Form from './components/Form'
import Table from './components/Table'
import User from './components/user/User'

export const routes = [
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
        name: 'user',
        components: {
            default: User,
            header: NavBar,
            footer: Footer
        }
    }
];