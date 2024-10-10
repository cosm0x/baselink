"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Container from "@/components/Container";
import Link from "next/link";
import { Stroke } from "@/icons";
import { Button } from "@/components/ui/button";

export default function Component() {
  const { isConnected } = useAccount();
  const { address } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <div>address: {JSON.stringify(address)}</div>
        <section className="py-8 lg:py-8 px-4 lg:pt-10 lg:px-7 pb-16">
          <header className="flex flex-col gap-y-12 xl:max-w-[1080px] xl:mx-auto">
            <div className="flex flex-col ">
              <h1
                className="font-inter font-bold tracking-[-0.04em] leading-[1.2em] text-base-100 text-4xl text-center
           md:mx-auto lg:text-[56px] w-full"
              >
                <span className="relative inline-block">
                  Quick listings, <Stroke />
                </span>{" "}
                Fast payments!
              </h1>

              <p
                className="text-lg font-medium leading-[1.75em] text-center 
          md:w-[70%] md:mx-auto lg:w-[60%] lg:text-2xl mt-12"
              >
                Create links and Start accepting USDT right now!
              </p>

              <div className="flex items-center justify-center mt-4">
                {isConnected ? (
                  <Link
                    href="/user"
                    className="bg-yellow font-bold text-base-100 px-5 py-3 rounded-lg lg:px-9"
                  >
                    Launch App →
                  </Link>
                ) : (
                  <>
                    {connectors.map((connector) => (
                      <Button
                        variant={"outline"}
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        type="button"
                        className="bg-yellow font-bold text-base-100 px-5 py-3 rounded-lg lg:px-9"
                      >
                        {connector.name == "Injected"
                          ? "Connect wallet → "
                          : "I dont have a wallet"}
                      </Button>
                    ))}
                  </>
                )}
              </div>
              <div className="text-center">{error?.message}</div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-[60%]">Welcome to BaseLink</div>
            </div>
          </header>
        </section>
      </div>
    </Container>
  );
}
