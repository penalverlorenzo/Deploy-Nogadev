import * as React from "react";

function SvgComponent(props) {
  return (
    <svg class="rounded-full bg-blue-600 h-10 md:h-12 md:p-3 md:w-12 mr-4 p-2 rtl:ml-4 rtl:mr-0 text-white w-10" viewBox="0 0 24 24" data-icon="tabler:rocket" height="24" width="24"><symbol id="ai:tabler:rocket"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3-5a9 9 0 0 0 6-8a3 3 0 0 0-3-3a9 9 0 0 0-8 6a6 6 0 0 0-5 3"></path><path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path></g></symbol><use xlinkHref="#ai:tabler:rocket"></use></svg>
  );
}

export default SvgComponent;
