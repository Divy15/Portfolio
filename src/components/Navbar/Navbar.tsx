import { DesktopView } from "./Views/DesktopView";
import { MobileView } from "./Views/MobileView";

export const Navbar = () => {
    return (
        /* Move sticky positioning, z-index, and top offset here */
        <header className="sticky top-4 z-50 w-full pb-4">
            {/* Mobile / Tablet View (visible from 0px up to md breakpoint) */}
            <div className="block md:hidden">
                <MobileView />
            </div>

            {/* Desktop View (visible on md screens and above) */}
            <div className="hidden md:block">
                <DesktopView />
            </div>
        </header>
    );
};