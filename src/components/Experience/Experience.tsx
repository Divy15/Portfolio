import { DesktopView } from "./Views/DesktopView";
import { MobileView } from "./Views/MobileView";


export const Experience = () => {
    return (
        <>
            {/* Show mobile or tablet view Experience section */}
            <div className="md:hidden">
                <MobileView />
            </div>

            {/* Show desktop view Experience section */}
            <div className="hidden md:block">
                <DesktopView />
            </div>
        </>
    );
}