import { DesktopView } from "./Views/DesktopView"
import { MobileView } from "./Views/MobileView"


export const Projects = () => {

    return(
        <>
        {/* mobile view */}
        <div className="md:hidden">
            <MobileView />
        </div>

        {/* desktop view */}
        <div className="hidden md:block">
            <DesktopView />
        </div>
        </>
    )
}