import Login from '../finalProject/React/Login'
import Layout from '../finalProject/React/Layout'
import Home from '../finalProject/React/Home'
import Info from '../finalProject/React/Info'
import Todos from '../finalProject/React/Todos'
import Posts from './React/Posts'
import Erorr from '../finalProject/React/Erorr'
import Comments from '../finalProject/React/Comments'
import Albums from './React/Albums'
import Photos from './React/Photos'


import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} ></Route>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='info' element={<Info />} />
                    <Route path='todos' element={<Todos />} />
                    <Route path='albums' element={<Albums />} />
                    <Route path='albums/:photoId/photos' element={<Photos/>}/>
                    <Route path='posts' element={<Posts />} >
                    <Route path='posts/:commentId/comments' element={<Comments />} />
                    </Route>
                </Route>
                <Route path='*' element={<Erorr />} >
            </Route>
        </Routes>
        </BrowserRouter >
    )
}

export default App