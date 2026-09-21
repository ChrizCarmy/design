import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Overview", to: "/" },
  { label: "Analytics", to: "/analytics" },
  { label: "Customers", to: "/customers" },
  { label: "Reports", to: "/reports" },
  { label: "Integrations", to: "/integrations" },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-md px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-blue-50 font-semibold text-blue-500"
                : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-[72px] w-full items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-blue-500" />
          <span className="text-lg font-bold text-slate-900">Aether</span>
        </div>
        <nav className="hidden items-start gap-2 lg:flex">
          <NavLinks />
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="flex h-5 w-5 items-center justify-center text-slate-600 hover:text-slate-900"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.55563 17.5007C8.70192 17.754 8.91231 17.9644 9.16568 18.1107C9.41904 18.257 9.70644 18.334 9.99899 18.334C10.2915 18.334 10.5789 18.257 10.8323 18.1107C11.0857 17.9644 11.2961 17.754 11.4424 17.5007M2.71773 12.7719C2.60886 12.8913 2.53702 13.0396 2.51094 13.1991C2.48485 13.3585 2.50566 13.522 2.57081 13.6698C2.63597 13.8176 2.74268 13.9433 2.87795 14.0316C3.01322 14.1199 3.17122 14.1669 3.33274 14.167H16.6664C16.8279 14.1671 16.9859 14.1202 17.1212 14.0321C17.2566 13.944 17.3634 13.8185 17.4288 13.6708C17.4941 13.5231 17.5151 13.3595 17.4892 13.2001C17.4634 13.0407 17.3917 12.8922 17.283 12.7728C16.1747 11.6302 14.9996 10.4159 14.9996 6.66641C14.9996 5.34021 14.4729 4.06834 13.5352 3.13057C12.5975 2.19281 11.3257 1.66599 9.99955 1.66599C8.67344 1.66599 7.40164 2.19281 6.46394 3.13057C5.52624 4.06834 4.99944 5.34021 4.99944 6.66641C4.99944 10.4159 3.82359 11.6302 2.71773 12.7719Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-5 w-5 items-center justify-center text-slate-600 hover:text-slate-900"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05881 3.44748C8.10473 2.96443 8.32909 2.51586 8.68806 2.18938C9.04704 1.86291 9.51483 1.68201 10.0001 1.68201C10.4853 1.68201 10.9531 1.86291 11.3121 2.18938C11.671 2.51586 11.8954 2.96443 11.9413 3.44748C11.9689 3.75953 12.0713 4.06033 12.2398 4.32443C12.4082 4.58854 12.6379 4.80816 12.9092 4.96472C13.1805 5.12127 13.4856 5.21015 13.7986 5.22383C14.1115 5.23752 14.4232 5.1756 14.7071 5.04332C15.1481 4.84313 15.6477 4.81417 16.1088 4.96206C16.5699 5.10995 16.9595 5.42411 17.2017 5.84341C17.444 6.2627 17.5215 6.75713 17.4193 7.23046C17.3171 7.70379 17.0425 8.12216 16.6488 8.40415C16.3925 8.58402 16.1832 8.82299 16.0387 9.10084C15.8943 9.37869 15.8188 9.68724 15.8188 10.0004C15.8188 10.3136 15.8943 10.6221 16.0387 10.9C16.1832 11.1778 16.3925 11.4168 16.6488 11.5967C17.0425 11.8786 17.3171 12.297 17.4193 12.7703C17.5215 13.2437 17.444 13.7381 17.2017 14.1574C16.9595 14.5767 16.5699 14.8909 16.1088 15.0387C15.6477 15.1866 15.1481 15.1577 14.7071 14.9575C14.4232 14.8252 14.1115 14.7633 13.7986 14.777C13.4856 14.7906 13.1805 14.8795 12.9092 15.0361C12.6379 15.1926 12.4082 15.4123 12.2398 15.6764C12.0713 15.9405 11.9689 16.2413 11.9413 16.5533C11.8954 17.0364 11.671 17.4849 11.3121 17.8114C10.9531 18.1379 10.4853 18.3188 10.0001 18.3188C9.51483 18.3188 9.04704 18.1379 8.68806 17.8114C8.32909 17.4849 8.10473 17.0364 8.05881 16.5533C8.03126 16.2412 7.92889 15.9402 7.76036 15.676C7.59184 15.4118 7.36212 15.1922 7.09067 15.0356C6.81922 14.879 6.51403 14.7902 6.20096 14.7766C5.88788 14.763 5.57614 14.825 5.29214 14.9575C4.85122 15.1577 4.35158 15.1866 3.89048 15.0387C3.42937 14.8909 3.03979 14.5767 2.79755 14.1574C2.55531 13.7381 2.47774 13.2437 2.57994 12.7703C2.68215 12.297 2.95681 11.8786 3.35048 11.5967C3.60683 11.4168 3.81609 11.1778 3.96055 10.9C4.10502 10.6221 4.18044 10.3136 4.18044 10.0004C4.18044 9.68724 4.10502 9.37869 3.96055 9.10084C3.81609 8.82299 3.60683 8.58402 3.35048 8.40415C2.95736 8.12202 2.68319 7.70381 2.58123 7.2308C2.47927 6.75779 2.55682 6.26377 2.7988 5.84475C3.04078 5.42572 3.4299 5.11163 3.89055 4.96352C4.3512 4.8154 4.85046 4.84385 5.29131 5.04332C5.57527 5.1756 5.88693 5.23752 6.19989 5.22383C6.51286 5.21015 6.81792 5.12127 7.08926 4.96472C7.36059 4.80816 7.59022 4.58854 7.7587 4.32443C7.92718 4.06033 8.02955 3.75953 8.05714 3.44748M12.4994 10.0007C12.4994 11.3814 11.3801 12.5007 9.99939 12.5007C8.61868 12.5007 7.49939 11.3814 7.49939 10.0007C7.49939 8.61998 8.61868 7.50069 9.99939 7.50069C11.3801 7.50069 12.4994 8.61998 12.4994 10.0007Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="hidden h-4 w-px bg-slate-200 sm:block" />
        <div className="hidden items-center gap-2 sm:flex">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7cf157b21adc480851a2afc2a75fab73a3b54c73?width=64"
            alt="Alex Morgan"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-slate-900">
            Alex Morgan
          </span>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="text-left text-lg font-bold text-slate-900">
              Aether
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
