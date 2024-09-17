/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const OptionInitial = ({props, actions, lang}) => {

  const generatedPrompt = (message) => {
    props.actions.generatedPrompt(message);
  }

  const PEN = "If you want to see these options again, type 'Options'";
  const PES = "Si quieres ver estas opciones nuevamente, escribe 'Opciones'";
  
  const contactEN = "How can I contact you?";
  const contactES = "como me puedo contactar?";

  const objectivesEN = "What are the objectives of Nogadev?";
  const objectivesES = "¿Cuáles son los objetivos de Nogadev?";

  const helpEN = "What can you do and how can you help me?";
  const helpES = "¿Qué puedes hacer y en qué me puedes ayudar?";
  return (
    <>
      <div className="flex justify-center">
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45 " onClick={() => generatedPrompt((lang === "ES")? contactES : contactEN)}>{(lang === "ES")? "Contactos" : "Contacts"}</button>
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt((lang === "ES")? objectivesES : objectivesEN)} >{(lang === "ES")? "Objetivos" : "Objectives"}</button>
        {/* <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => actions.redirectToWhatsappLink() } >Whatsapp</button> */}
        <button className=" bg-black text-white py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt((lang === "ES")? helpES : helpEN)} >{(lang === "ES")? "Ayuda" : "Help"}</button>
      </div>
      <p className="text-sm text-black text-center mb-1.5 mt-3">{(lang === "ES")? PES : PEN}</p>
    </>
  )
}