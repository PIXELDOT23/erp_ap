//Import Modules
import {Link} from "react-router";
import { motion } from "motion/react";

// Import Components

// Import Routes

// Import Assets
import LoginImg from '../../assets/img/Login.svg'

const Login = () => {
    return (
        <>
            <div className="h-screen">
                <section className="px-10 py-4">
                    <div>
                        <motion.p initial={{ opacity: 0, y: 100 }}
                                  animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                                  className="head text-5xl">
                            Let's Arrange Everything First
                        </motion.p>
                        <motion.hr initial={{ y: 100, z: 1000, opacity: 0 }}
                                   animate={{ y: 0, z: 0, opacity: 1 }}
                                   className="border-b-0 border-[#707070] my-2" />
                        <motion.p initial={{ opacity: 0, y: 100 }}
                                  transition={{ delay: 0.4 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className="head text-2xl">
                            Login to Your Account
                        </motion.p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="my-6">
                            <form className="grid grid-cols-2 gap-22 text-[#202020]">
                                <div className="grid gap-10">
                                    <motion.label initial={{ opacity: 0, y: 100 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.1 }}
                                                  className="grid" htmlFor="Email">
                                        <span className="mx-2">Email</span>
                                        <input type="email"
                                               className="outline outline-[#BABABA] focus:outline-2 focus:outline-[#005bea] rounded p-4"
                                               placeholder="Enter Your Phone" aria-required="true"/>
                                    </motion.label>
                                    <motion.label initial={{ opacity: 0, y: 100 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.2 }}
                                                  className="grid" htmlFor="phone">
                                        <span className="mx-2">Phone</span>
                                        <input type="tel"
                                               className="outline outline-[#BABABA] focus:outline-2 focus:outline-[#005bea] rounded p-4"
                                               placeholder="Enter Your Phone" aria-required="true"/>
                                    </motion.label>
                                </div>
                                <div className="grid gap-10">
                                    <motion.label initial={{ opacity: 0, y: 100 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.3 }}
                                                  className="grid" htmlFor="password">
                                        <span className="mx-2">Password</span>
                                        <input type="password"
                                               className="outline outline-[#BABABA] focus:outline-2 focus:outline-[#005bea] rounded p-4"
                                               placeholder="Enter Your Name"/>
                                    </motion.label>
                                    <motion.label initial={{ opacity: 0, y: 100 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: 0.4 }}
                                                  className="grid" htmlFor="designation">
                                        <span className="mx-2">Designation</span>
                                        <select name="designation"
                                                className="outline outline-[#BABABA] focus:outline-2 focus:outline-[#005bea] rounded p-4"
                                                id="role" placeholder="Select Your Designation">
                                            <option value="">
                                                Select Your Designation
                                            </option>
                                            <option value="MD">MD</option>
                                            <option value="Accountant">Accountant</option>
                                            <option value="Site Supervisor">Site Supervisor</option>
                                            <option value="Other Individuals">Other Individuals</option>
                                        </select>
                                    </motion.label>
                                </div>
                                <div className="grid gap-6">
                                    <motion.input type="submit" initial={{ opacity:0, y: 100 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: 0.1 }}
                                              className="text-[#005bea] border border-[#6392E5] bg-[#D9E1EF] hover:bg-[#C9D8F3] rounded p-4"
                                              value="Login" />
                                    <motion.p className="text-xl"
                                              initial={{ opacity:0, y: 100 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: 0.2 }}>
                                        <span>Don't have an account?</span>
                                        <Link className="text-[#005bea]" to={'/auth/register'}>Create One</Link>
                                    </motion.p>
                                </div>
                            </form>
                            <div className="grid gap-4 my-4">
                                <motion.hr initial={{ y: 100, z: 1000, opacity: 0 }}
                                           animate={{ y: 0, z: 0, opacity: 1 }} className="border-[#6392E5]" />
                                <motion.p initial={{ opacity:0, y: 100 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: 0.3 }}
                                          className="text-xl text-center">
                                    Enter your email, password and designation to access your<br/>account
                                </motion.p>
                            </div>
                        </div>
                        <div>
                            <motion.img initial={{ opacity: 0, y: 100, rotateZ: 5 }}
                                        animate={{ opacity: 1, y: 0, rotateZ: 0}} src={LoginImg} alt="Login"/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;