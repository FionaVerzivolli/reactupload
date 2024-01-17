const TextBody = ({ position, text, date, company_name, skills, image }) => {
  return (
    <div className="text-teal-950 space-y-2 flex items-center">
      <div className="flex-1">
        <p className="mt-5 text-3xl font-bold underline-teal-300">{position}</p>
        <p className="text-xl font-bold">{company_name}</p>
        <p className="text-lg font-bold">{date}</p>
        <p className="ml-5 mt-2">{text}</p>
        <p className="ml-5 font-bold">{skills}</p>
      </div>
      <img className="w-32 h-32 border-none ml-10 rounded-lg" src={image} alt="Description of the image" />
    </div>
  );
}

export default TextBody;
