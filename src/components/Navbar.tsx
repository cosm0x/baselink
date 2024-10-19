"use client";
import Link from "next/link";
import Container from "@/components/Container";
import ToggleMode from "@/components/ToggleMode";
import { useAccount, useDisconnect } from "wagmi";
import { shortenAddress } from "@/helpers";
import { UserIcon } from "lucide-react";

const Navbar = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <nav className="border-b border-b-gray-100 dark:border-b-card py-1 lg:mb-7 lg:py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="font-bold lg:text-lg">
              BaseLink
            </Link>
          </div>

          <div className="flex items-center gap-x-1">
            <ToggleMode />
            <div className="flex items-center gap-x-1">
              {address && (
                <>
                  <UserIcon size={14} /> {shortenAddress(address)}
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
