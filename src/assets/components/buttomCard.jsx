function ButtonCard({text,image}){
    return(
        <>
        <div className="rounded-full w-40 p-4 bg-[#123458] flex items-center gap-4 justify-center hover:scale-105 transition-transform">
            <img src={image} alt="" className="w-8 h-8"/>
            <p className="text-xl text-white" id="subhead">{text}</p>
        </div>
        </>
    )
}

export default ButtonCard