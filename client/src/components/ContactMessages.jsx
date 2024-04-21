
function ContactMessages({ convoList }) {

    return (
        <div className="flex flex-col gap-5">
            {convoList.map((convo) => (
                <div className="flex gap-2 hover:cursor-pointer">
                    <img
                        src={convo.user_list[0].profilePicture} alt="..."
                        className="shadow-lg rounded-full w-16 h-16 align-middle border-none object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-slate-700">{convo.user_list[0].firstName} {convo.user_list[0].lastName}</p>
                        <p className="font-semibold text-slate-500 text-sm">{convo.recent_message?.message}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ContactMessages;