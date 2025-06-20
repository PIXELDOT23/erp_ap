// Import Modules
import { Link } from "react-router";
import { motion, delay } from "motion/react"


const Auth_Btn = () => {
    return (
        <div>
            {/*Auth Btn*/}
            <div className="h-dvh flex flex-col justify-center items-center">
                <motion.p initial={{ opacity: 0, y: -100 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} className="head text-6xl">
                    Innovate Your Environment
                </motion.p>

                <motion.div initial={{ x: -100, z: 1000, opacity: 0 }} animate={{ x: 0, z: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }}
                            className="w-full border-b border-[#6392E5] mx-10 my-4">

                </motion.div>


                <div className="flex my-6">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                        <Link className="text-[#005BEA] text-xl border border-[#6392E5] bg-[#D9E1EF] hover:bg-[#C9D8F3] mx-2 px-6 py-4 rounded" to={'/auth/register'}>
                            Register
                        </Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                        <Link className="text-[#005BEA] text-xl border border-[#6392E5] bg-[#D9E1EF] hover:bg-[#C9D8F3] mx-2 px-6 py-4 rounded" to={'/auth/login'}>
                            Login
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Auth_Btn;