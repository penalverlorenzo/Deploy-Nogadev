export const Philosophy = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 font-medium max-w-6xl py-4 text-center text-md">
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
        Philosophy:
      </span>{" "}
      We are committed to providing the best possible service to our clients. We
      believe in the power of technology to transform businesses and lives.
    </div>
  );
};

