import SideBar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import ChatRoom from "../components/ChatRoom";
import RegisterPage from "./RegisterPage";

import { io } from "socket.io-client";

const socket = io("http://localhost:3000")


function MainPage() {


    return (
        <div className="flex flex-row h-screen justify-center items-center bg-sky-100">
            <div className="grid grid-cols-12 rounded-lg overflow-hidden h-3/4 shadow-lg">
                <SideBar />
                <MessageList />
                <ChatRoom />
            </div>
        </div>
    )
};

export default MainPage;