
function ContactMessages() {

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-2">
                <img 
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTJbB81jhhw85Um815yzwnd0ST9HGiLNm7InsO_cXS6QCrWRqF" alt="..." 
                    className="shadow-lg rounded-full w-16 h-16 align-middle border-none object-cover" 
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-slate-700">Emiliano Martinez</p>
                    <p className="font-semibold text-slate-500 text-sm">wkwk</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img 
                    src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ245LEynZ8bjuAZr1ySUYWF2GRHEYyCR8RPj2gb9keUiy-PoZUDENKxl1IpWa6LkDxfOFIuk9cPmksUUc" alt="..." 
                    className="shadow-lg rounded-full w-16 h-16 align-middle border-none object-cover" 
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-slate-700">Enzo Fernandes</p>
                    <p className="font-semibold text-slate-500 text-sm">Pakabs bro</p>
                </div>
            </div>
            <div className="flex gap-2">
                <img 
                    src="https://b.fssta.com/uploads/application/soccer/headshots/13761.vresize.350.350.medium.75.png" alt="..." 
                    className="shadow-lg rounded-full w-16 h-16 align-middle border-none object-cover" 
                />
                <div className="flex flex-col">
                    <p className="font-semibold text-slate-700">Rodrigo De Paul</p>
                    <p className="font-semibold text-slate-500 text-sm">test</p>
                </div>
            </div>
        </div>
    )
};

export default ContactMessages;