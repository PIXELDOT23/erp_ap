// Import Modules
import toast from "react-hot-toast";
import { create } from "zustand/react";
import axios from '../lib/axios.lib';

// User Hooks
export const useUser = create((set) => ({
    user: null,
    loading: false,
    checkAuth: true,
    Redirect: false,
    register: async ({ user_name, user_password, confirm_password, user_phone, user_email, user_designation }) => {

        set({ loading: true });

        // Checking the Password matches or not, then create a user
        if (user_password !== confirm_password)
        {
            set({ loading: false });

            toast.error("Passwords don't match", {
                style: {
                    border: '1px solid #6392E5',
                    color: '#005bea',
                    background: '#f1f1f1',
                }
            });
        }

        try {

            const res = await axios.post("/auth/register", { user_name, user_password, confirm_password, user_phone, user_email, user_designation });

            console.log(res.data);

            set({ user: res.data, loading: false, Redirect: true });

            return toast.success("User registered successfully.", {
                style: {
                    border: '1px solid #6392E5',
                    color: '#005bea',
                    background: '#f1f1f1',
                }
            });

        } catch (e) {

            set({ loading: false });

            console.log(e)

        }
    },
}));

