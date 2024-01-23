import { BUTTONS, EVENTS } from "../utils/consts.js";

function navigate (href) {
    window.history.pushState({}, '', href) // cambia la url pero no refresca la pagina
    const navigationEvent = new Event(EVENTS.PUSHSTATE) // evento personalizado para avisar cuando cambiamos la url
    window.dispatchEvent(navigationEvent)
}

// eslint-disable-next-line react/prop-types
export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        const isMainEvent = event.button === BUTTONS.primary
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'
    
        if (isMainEvent && !isModifiedEvent && isManageableEvent) {
            event.preventDefault()
            navigate(to) //navigacion SPA
            window.scrollTo(0,0)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}