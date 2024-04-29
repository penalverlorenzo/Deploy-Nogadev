export const OptionInitial = ({lang}, props) => {

  const generatedPrompt = (message) => {
    props.actions.generatedPrompt(message);
  }

  const PEN = "If you want to see these options again, type 'Options'";
  const PES = "Si quieres ver estas opciones nuevamente, escribe 'Opciones'";
  
  return (
    <>
      <p className="text-sm text-white text-center mb-1.5">{(lang === "ES")? PES : PEN}</p>
      <div className="flex ">
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45 " onClick={() => generatedPrompt("Show me the contacts for Fernando Nogara, Juan Pablo Shaw y nogadev?")}>{(lang === "ES")? "Contactos" : "Contacts"}</button>
        <button className=" bg-black text-white mr-1 py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt("What are Nogadev's goals?")} >{(lang === "ES")? "Objetivos" : "Objectives"}</button>
        <button className=" bg-black text-white py-1 px-2 rounded-2xl text-[13px] shadow-md transition-all hover:shadow-gray-400/45  " onClick={() => generatedPrompt("Who holds the position of co-founder?")} >{(lang === "ES")? "cofundadores" : "co-founders"}</button>
      </div>
    </>
  )
}