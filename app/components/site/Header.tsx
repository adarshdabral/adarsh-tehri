import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, ShoppingBag, Menu, X, Search } from "lucide-react";
import { Logo } from "./Logo";
import { useApp } from "@/stores/app-store";
import { demoUsers } from "@/data";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/homestays", label: "Stay" },
  { to: "/activities", label: "Experience" },
  { to: "/events", label: "Events" },
  { to: "/marketplace", label: "Shop" },
];

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const wishlist = useApp((s) => s.wishlist);
  const cart = useApp((s) => s.cart);
  const userId = useApp((s) => s.currentUserId);
  const setRole = useApp((s) => s.setRole);
  const user = demoUsers.find((u) => u.id === userId) ?? demoUsers[0];
  const loc = useLocation();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setOpen(false), [loc.pathname]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        solid ? "bg-surface/85 backdrop-blur-lg border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between md:h-20">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                solid ? "text-foreground/80 hover:bg-muted hover:text-foreground" : "text-white/90 hover:bg-white/10"
              }`}
              activeProps={{ className: solid ? "bg-muted text-foreground" : "bg-white/15 text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            to="/wishlist"
            className={`relative hidden rounded-full p-2.5 transition md:inline-flex ${
              solid ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"
            }`}
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent-warm px-1 text-[10px] font-semibold text-accent-warm-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className={`relative rounded-full p-2.5 transition ${
              solid ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent-warm px-1 text-[10px] font-semibold text-accent-warm-foreground">
                {cart.reduce((s, c) => s + c.qty, 0)}
              </span>
            )}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`ml-1 flex items-center gap-2 rounded-full border py-1 pl-2 pr-1 transition ${
                  solid
                    ? "border-hairline bg-card hover:shadow-soft"
                    : "border-white/30 bg-white/10 backdrop-blur hover:bg-white/20"
                }`}
                aria-label="Profile"
              >
                <Menu className={`h-4 w-4 ${solid ? "text-foreground" : "text-white"}`} />
                <Avatar className="h-7 w-7">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <div className="flex items-center gap-3 px-2 py-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{user.name}</div>
                  <Badge variant="secondary" className="mt-0.5 text-[10px] capitalize">{user.role}</Badge>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/profile">My profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to={`/dashboard/${user.role}`}>Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/wishlist">Wishlist</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/orders">My orders</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-[10px] uppercase tracking-wider text-muted-foreground">Switch role (demo)</DropdownMenuLabel>
              {(["tourist", "host", "vendor", "organizer", "admin"] as const).map((r) => (
                <DropdownMenuItem key={r} onClick={() => setRole(r)} className="capitalize">
                  {r}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/auth/login">Sign out</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`ml-1 rounded-full p-2 md:hidden ${solid ? "text-foreground" : "text-white"}`}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-surface px-5 pb-6 pt-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="block py-2 text-base font-medium">
              {n.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm"><Link to="/wishlist">Wishlist</Link></Button>
            <Button asChild size="sm"><Link to={`/dashboard/${user.role}`}>Dashboard</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}