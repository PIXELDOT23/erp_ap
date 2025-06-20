// Import Modules
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center text-2xl h-20 bg-[#E5E9F0] px-10 py-4">
                <div>
                    <Link to={'/'}>
                        Core<span className="text-[#005bea]">Build</span>
                    </Link>
                </div>

                <div>
                    <Link className="text-[#005BEA] text-xl border border-[#6392E5] bg-[#D9E1EF] hover:bg-[#C9D8F3] p-2 rounded"
                          to={'/'}>
                        <i className="bi bi-house mr-2"></i>
                        Home
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;