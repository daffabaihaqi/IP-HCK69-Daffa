
function ChatRoom() {

    return (
        <div className="col-span-6 flex flex-col bg-slate-50 px-3 py-5">
            <div className="flex-none pb-3 border-b-2 border-solid">
                <p className="font-semibold text-slate-900 text-xl">Emiliano Martinez</p>
            </div>
            <div className="grow flex flex-col gap-2 overflow-auto py-2">
                <div className="flex gap-3">
                    <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTJbB81jhhw85Um815yzwnd0ST9HGiLNm7InsO_cXS6QCrWRqF" alt="..."
                        className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
                    />
                    <div className="flex flex-col max-w-80">
                        <p className="text-slate-900 font-normal">Emiliano Martinez:</p>
                        <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto quae dolor fugiat voluptates odio cupiditate eum nostrum, in doloremque!</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-3">
                    <img
                        src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254" alt="..."
                        className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
                    />
                    <div className="flex flex-col items-end max-w-80">
                        <p className="text-slate-900 font-normal">You:</p>
                        <div className="bg-blue-700 px-2 py-2 rounded-l-lg">
                            <p className="text-white font-normal text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere officiis officia! Pariatur praesentium ipsa harum provident eaque? Eum, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTJbB81jhhw85Um815yzwnd0ST9HGiLNm7InsO_cXS6QCrWRqF" alt="..."
                        className="shadow-lg rounded-full w-12 h-12 align-middle border-none object-cover"
                    />
                    <div className="flex flex-col max-w-80">
                        <p className="text-slate-900 font-normal">Emiliano Martinez:</p>
                        <div className="bg-slate-200 px-2 py-2 rounded-r-lg">
                            <p>wkwk</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <form action="">
                    <div className="flex bg-slate-100 rounded-full px-3 py-2">
                        <input type="text" name="" placeholder="Type Something..." id=""
                            className="bg-slate-100 grow"
                        />
                        <button>
                            <svg class="w-[29px] h-[29px] text-blue-700 dark:text-white rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ChatRoom;