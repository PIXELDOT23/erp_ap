// Import Modules
import {Link} from "react-router-dom";
import {
    Send,
    Truck,
    Users,
    Kanban,
    Percent,
    WalletIcon,
    ClipboardList,
    ArrowLeftRight,
    LayoutDashboard,
} from "lucide-react";


// Property holds the details of app list
const apps = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { name: "Accounting", icon: <Percent />, path: "/accounting" },
    { name: "Users", icon: <Users />, path: "/user-management" },
    { name: "Project", icon: <Kanban />, path: "/project" },
    { name: "Report", icon: <ClipboardList />, path: "/report" },
    { name: "Requirements", icon: <Send />, path: "/requirements" },
    { name: "Transactions", icon: <ArrowLeftRight />, path: "/transactions" },
    { name: "Suppliers", icon: <Truck />, path: "/suppliers" },
    { name: "Budgets", icon: <WalletIcon />, path: "/budgets" },
];


const AppViewList = () => {
    return (
        <div className="p-10">
            <section className="h-screen grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-center">

                {
                    apps.map((app, idx) => (

                        <div key={idx} className="flex justify-center items-center">
                            <Link to={ app.path }
                                  className="flex flex-col justify-center items-center text-xl text-[#005BEA]">
                                <div className="bg-[#F1F1F1] drop-shadow-xl px-8 py-8 rounded border border-transparent hover:border-[#8CAEE9] hover:bg-[#D9E1EF] mb-4 transition-all duration-200">
                                    { app.icon }
                                </div>
                                <div>
                                    { app.name }
                                </div>
                            </Link>
                        </div>

                    ))
                }

            </section>
        </div>
    );
};

export default AppViewList;