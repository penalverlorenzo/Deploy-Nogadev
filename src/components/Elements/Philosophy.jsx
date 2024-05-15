import { useContext } from "react";
import { DataProvider } from "../../context/DataContextProvider";

export const Philosophy = () => {
  const { languajeFile: { sections: { philosophy } } } = useContext(DataProvider);

  return (
    <div className="mx-auto px-4 sm:px-6 font-medium w-full py-8 text-center text-md bg-blue-50">
      <span className="font-bold">
        <svg
          className="align-text-bottom h-5 inline-block w-5"
          viewBox="0 0 24 24"
          data-icon="tabler:info-square"
          height="24"
          width="24"
        >
          <symbol id="ai:tabler:info-square">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12 9h.01M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <path d="M11 12h1v4h1"></path>
            </g>
          </symbol>
          <use xlinkHref="#ai:tabler:info-square"></use>
        </svg>{" "}
        {philosophy.title}:
      </span>{" "}
      {philosophy.description}
    </div>
  );
};

