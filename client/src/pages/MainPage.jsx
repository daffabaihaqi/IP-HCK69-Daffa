import SideBar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import ChatRoom from "../components/ChatRoom";
import RegisterPage from "./RegisterPage";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { apiRequest } from "../utils/axios";

// const socket = io("http://localhost:3000")


function MainPage() {
    const [userData, setUserData] = useState({});
    const [convoList, setConvoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserData = async () => {
        setIsLoading(true);

        try {
            const {data} = await apiRequest({
                method : 'GET',
                url : '/user-data',
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });

            setUserData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    const fetchConversations = async () => {
        setIsLoading(true);
        try {
            const {data} = await apiRequest({
                method : 'GET',
                url : '/conversations',
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            })

            setConvoList(data.details);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData()
        fetchConversations()
    }, []);

    return (
        <div className="flex flex-row h-screen justify-center items-center bg-sky-100">
            <div className="grid grid-cols-12 rounded-lg overflow-hidden h-3/4 shadow-lg">
                {isLoading ? (<>
                    <p>Tunggu dulu ya...</p>
                </>) : (<>
                    <SideBar userData={userData}/>
                    <MessageList convoList={convoList}/>
                </>)}
                <ChatRoom />
            </div>
        </div>
    )
};

export default MainPage;