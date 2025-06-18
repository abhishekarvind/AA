function ProjectCard({ text, img, description }) {
  return (
    <div className="w-full sm:w-[22rem] min-h-[10rem] bg-[#123458] rounded-2xl p-4 mb-6 flex flex-col justify-between">
      {/* Inner Content */}
      <div className="bg-[#F1EFEC] rounded-xl border border-[#123458]/20 flex p-3 items-center gap-4">
        <img src={img} alt="" className="w-14 h-14 object-cover rounded-md" />
        <div>
          <p className="text-xl font-bold text-[#123458]">{text}</p>
          <p className="text-sm text-[#393E46]" id="subhead">
            {description}
          </p>
        </div>
      </div>

      {/* Click Here - bottom right */}
      <p className="text-white text-lg mt-4 text-right hover:underline cursor-pointer">
        Click Here
      </p>
    </div>
  );
}

export default ProjectCard;
