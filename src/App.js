import logo from './logo.svg';
import './App.css';
import io, { Socket } from 'socket.io-client'
import { useState } from 'react';
import Card from './componant/Card/Card';
import { FaAngleLeft, FaAngleRight, FaPlus, IconName } from "react-icons/fa";
import { hover } from '@testing-library/user-event/dist/hover';
import { Button, Offcanvas } from 'react-bootstrap';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Main from './componant/Layout/Main/Main';
import Todos from './componant/Todos/Todos';
import Login from './componant/LoginAndRegi/Login/Login';
import Registi from './componant/LoginAndRegi/Registition/Registi';
import Privaterouter from './componant/PrivateRoute/Privaterouter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './componant/Home/Home';
import ScrumProject from './componant/AgileProject/ScrumProject/ScrumProject';
import BugTracking from './componant/AgileProject/BugTracking/BugTracking';
import Automation from './componant/AgileProject/Automation/Automation';
import KanbanBoard from './componant/AgileProject/KanbanBoard/KanbanBoard';
import TodosData from './componant/Todos/TodosData/TodosData';

function App() {
  AOS.init();
  // const socket = io.connect('http://localhost:5000/')
  // const [massage, setMassaget] = useState('')
  // console.log(socket)
  // const sendmassage = () => {
  //   const mdValue = massage.target.value;
  //   Socket.emit("reactEvent", mdValue)
  //   console.log(mdValue)
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <ScrumProject></ScrumProject>
        },
        {
          path: "/bugtrack",
          element: <BugTracking></BugTracking>
        },
        {
          path: "/automation",
          element: <Automation></Automation>
        },
        {
          path: "/kanban",
          element: <KanbanBoard></KanbanBoard>
        }
      ]
    },
    {
      path: "/todo",
      element: <Privaterouter><Main></Main></Privaterouter>,
      children: [
        {
          path: "/todo",
          element: <TodosData></TodosData>
        },
        {
          path: "/todo/todoData/:id",
          loader: async ({ params }) => {
            console.log(params.id)
            return fetch(`http://localhost:5000/boards/${params.id}`)
          },
          element: <Todos></Todos>
        }
      ]

    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
