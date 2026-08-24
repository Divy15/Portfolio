import { DesktopView } from "./Views/DesktopView"
import { MobileView } from "./Views/MobileView"




export const HeroSection = () => {

    return(
        <>
        {/* Show mobile or tablet view Hero section */}
        <div className="md:hidden">
            <MobileView />
        </div>

        {/* Show desktop view Hero section */}
        <div className="hidden md:block">
            <DesktopView />
        </div>
        </>
    )
}