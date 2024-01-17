const Skill = ({ header, text, text2, text3, text4, text5 }) => {
    return (
      <div className="text-teal-950 space-x-5  object-contain">
        <p className=" text-xl font-bold">
        <span class="underline-teal-300">{header}</span></p>
        <p className="mb-1 mt-2">{text}</p>
        <p className="mb-1">{text2}</p>
        <p className="mb-1">{text3}</p>
        <p className="mb-1">{text4}</p>
        <p className="mb-4">{text5}</p>
      </div>
    );
  }
  
  export default Skill;
  