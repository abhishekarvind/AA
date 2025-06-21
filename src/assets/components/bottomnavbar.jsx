import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

function BottomNavBar() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                bg-[#D4C9BE]/40 backdrop-blur-md px-6 py-4 
                rounded-full border border-black/30 shadow-lg  
                w-fit z-50">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.instagram.com/abishek.arvind/" // Replace with your real URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#123458] text-xl md:text-2xl cursor-pointer hover:scale-135 transition-transform" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abhishekarvindcb/" // Replace with your real URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#123458] text-xl md:text-2xl cursor-pointer hover:scale-135 transition-transform" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abhishekarvind" // Replace with your real URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="text-[#123458] text-xl md:text-2xl cursor-pointer hover:scale-135 transition-transform" />
          </a>
        </li>
      </ul>
    </div>


  )
}

export default BottomNavBar