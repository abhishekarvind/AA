function Card({ text, img, description }) {
    return (
        <>
            <div className="bg-[#123458] w-full md:w-1/2 flex items-center gap-4 p-6 rounded-2xl  hover:scale-105 transition-transform">
  <img src={img} alt="" className="w-12 h-12 object-cover rounded-md" />
  
  <div>
    <p className="text-lg md:text-xl font-bold text-white">{text}</p>
    <p className="text-sm md:text-base text-white">{description}</p>
  </div>
</div>

        </>
    )
}

export default Card