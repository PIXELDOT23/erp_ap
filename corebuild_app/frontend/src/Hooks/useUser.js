// Import Modules
import toast from "react-hot-toast";
import axios from '../lib/axios.lib';
import { create } from "zustand/react";

// User Hooks
export const useUser = create((set) => ({
    user: null,
    loading: false,
    checkingAuth: true,
    isLoggedIn: false,
    register: async ({ user_name, user_password, confirm_password, user_phone, user_email, user_designation }) => {

        set({ loading: true });

        try {

            const res = await axios.post("/auth/register", { user_name, user_password, confirm_password, user_phone, user_email, user_designation });

            console.log(res.data);

            set({ user: res.data, loading: false });

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
    login: async ({ user_email, user_phone, user_password , user_designation }) => {

        set({ loading: true });

        try {

            const res = await axios.post('/auth/login', { user_email, user_phone, user_password, user_designation });

            console.log(res.data);

            set({ user: res.data.user, isLoggedIn: true, loading: false });

        } catch (err) {

            set({ loading: false });

            toast.error(err.response.data.msg || "An error occurred", {
                style: {
                    border: '1px solid #6392E5',
                    color: '#005bea',
                    background: '#f1f1f1',
                }
            });

        }
    },
    checkAuth: async () => {

        set({ checkingAuth: true });

        try {

            const res = await axios.get("/auth/profile");

            console.log(res.data);

            set({ user: res.data.user, isLoggedIn: true, checkingAuth: false });

        } catch (err) {

            // Handle 401 error or others
            if (err.response?.status === 401) {
                console.warn("🔒 Not logged in: 401 Unauthorized");
            } else {
                console.error("❌ Auth check failed:", err.response?.data?.msg || err.message);
            }

            set({ user: null, isLoggedIn: false, checkingAuth: false });

        }

    },
    logout: async () => {

        try {

            await axios.post("/auth/logout");

            set({ user: null, isLoggedIn: false });

        } catch (e) {

            toast.error(e.response?.data?.msg ||"An error occurred during logout", {
                style: {
                    border: '1px solid #6392E5',
                    color: '#005bea',
                    background: '#f1f1f1',
                }
            });

        }

    }
}));

