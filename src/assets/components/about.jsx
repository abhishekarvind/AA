function AboutMe(){
    return(
        <>
        <div className="mt-4 flex flex-col md:flex-row justify-between gap-6">
  <div className="text-xl md:text-2xl border p-6 rounded-2xl w-full h-fit md:w-1/2">
    <p className="font-bold">Full Name</p>
    <p id="subhead" className="font-sans">Abhishek Arvind CB</p>
    <br />
    <p className="font-bold">Email</p>
    <p id="subhead" className="font-sans">abhishekarvind07@gmail.com</p>
  </div>

  {/* About Card */}
  <div className="text-xl md:text-xl border p-6 rounded-2xl w-full md:w-1/2 text-white bg-[#123458]  hover:scale-105 transition-transform">
    <p id="subhead">
      Hi, I'm Abhishek Arvind CB, a recent AI & Data Science graduate currently pursuing a Master’s in Cybersecurity Management at Mykolas Romeris University, Lithuania.
    </p>
    <p className="mt-4" id="subhead">
      I'm passionate about solving real-world problems through technology, with experience in Flutter, React, cloud computing, and data analytics. My interests include Machine Learning, NLP, and UI/UX design.
    </p>
  </div>
</div>

        </>
    )
}

export default AboutMe