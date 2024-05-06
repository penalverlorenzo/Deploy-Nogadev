/* eslint-disable react/prop-types */
export const OptionInitial = ({props, lang}) => {

  const generatedPrompt = (message) => {
    props.actions.generatedPrompt(message);
  }

  const PEN = "If you want to see these options again, type 'Options'";
  const PES = "Si quieres ver estas opciones nuevamente, escribe 'Opciones'";
  
  const contactEN = "Show me the contacts for Fernando Nogara, Juan Pablo Shaw y nogadev?";
  const contactES = "Muéstrame los contactos de Fernando Nogara, Juan Pablo Shaw y nogadev?";

  const objectivesEN = "What are Nogadev's goals?";
  const objectivesES = "¿Cuáles son los objetivos de Nogadev?";

  const coFoundersEN = "Who are the co-founders?";
  const coFoundersES = "¿Quiénes son los cofundadores?";
  
  return (
    <>
      <p className="text-sm text-white text-center mb-1.5">{(lang === "ES")? PES : PEN}</p>
      <div className="flex ">
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45 " onClick={() => generatedPrompt((lang === "ES")? contactES : contactEN)}>{(lang === "ES")? "Contactos" : "Contacts"}</button>
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt((lang === "ES")? objectivesES : objectivesEN)} >{(lang === "ES")? "Objetivos" : "Objectives"}</button>
        <button className=" bg-black text-white py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt((lang === "ES")? coFoundersES : coFoundersEN)} >{(lang === "ES")? "cofundadores" : "co-founders"}</button>
      </div>
    </>
  )
}