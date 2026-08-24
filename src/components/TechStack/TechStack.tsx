import { DesktopView } from "./Views/DesktopView"
import { MobileView } from "./Views/MobileView"


export const TechStack = () => {

    return(
        <>
        <div className="md:hidden">
            <MobileView />
        </div>

        <div className="hidden md:block">
            <DesktopView />
        </div>
        </>
    )
}