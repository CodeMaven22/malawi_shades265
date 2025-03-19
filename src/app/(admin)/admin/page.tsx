import { Raleway } from "next/font/google";
import {ReactNode} from "react";
import "../globals.css";
import {AdminSidebar} from "@/components/admin/admin-sidebar";
import {AdminHeader} from "@/components/admin/admin-header";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "400"
})

export default function AdminLayout({ children }: { children: ReactNode }) {
    return(
        <html lang="en">
        <body className={`${raleway.className}`}>
        <div className=" min-h-screen bg-gray-100 flex">
            <AdminSidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
            </div>
        </div>
        </body>

        </html>
    )
}