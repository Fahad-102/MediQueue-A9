"use client";

import { useEffect } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children }) {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && !session) {
            toast.error("Login First", {
                toastId: "login_first_clean"
            });
            
            const timer = setTimeout(() => {
                router.push("/");
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [session, isPending, router]);

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <p className="text-gray-500 font-medium animate-pulse">Checking authentication...</p>
            </div>
        );
    }

    if (!session) return null;

    return <>{children}</>;
}