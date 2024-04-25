import * as React from "react";

function SvgComponent(props) {
  return (
<svg className="rounded-full bg-blue-600 h-10 md:h-12 md:p-3 md:w-12 mr-4 p-2 rtl:ml-4 rtl:mr-0 text-white w-10" viewBox="0 0 24 24" dataIcon="tabler:bulb" height="24" width="24"><symbol id="ai:tabler:bulb"><path d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></symbol><use  xlinkHref="#ai:tabler:bulb"></use></svg>  );
}

export default SvgComponent;
