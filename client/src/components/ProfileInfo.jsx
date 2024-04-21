
function ProfileInfo() {

    return (
        <div className="flex flex-col items-center gap-2 mb-5">
            <img 
                src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254" alt="..." 
                className="shadow-lg rounded-full w-20 h-20 align-middle border-none object-cover" 
            />
            <p className="font-semibold text-xl">Lionel Andres Messi</p>
        </div>
    )
};

export default ProfileInfo;