import { DarkModeSVG } from "../../assets/svg/DarkModeSvg"

export const DarkModeBtn = () => {
    const body = document.querySelector('.dark')
    const toggle = () => {
        body.classList.toggle('dark')
    }
    return (
        <>
        <button onClick={toggle} aria-label="Toggle between Dark and Light mode" className="items-center dark:focus:ring-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 inline-flex p-2.5 rounded-lg text-muted text-sm" data-aw-toggle-color-scheme="" type="button">
            <DarkModeSVG></DarkModeSVG>
        </button>
        </>
    )
}