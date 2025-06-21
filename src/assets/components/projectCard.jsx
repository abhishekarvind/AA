function ProjectCard({ text, img, description }) {
  return (
    <div className="w-full sm:w-[22rem] min-h-[12rem] bg-gradient-to-br from-[#123458] to-[#0e2a3a] rounded-2xl p-5 mb-6 flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.03] duration-300">
  {/* Inner Content */}
  <div className="bg-[#F1EFEC] rounded-xl border border-[#123458]/20 flex p-4 items-center gap-4 shadow-md">
    <img src={img} alt="" className="w-16 h-16 object-cover rounded-md " />
    <div>
      <p className="text-xl font-semibold text-[#123458]">{text}</p>
      <p className="text-sm text-[#393E46] font-light" id="subhead">
        {description}
      </p>
    </div>
  </div>

  {/* Button or Footer Placeholder */}
</div>

  );
}

export default ProjectCard;
