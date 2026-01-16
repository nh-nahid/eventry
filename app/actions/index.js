"use server"

import { createUser, FindUserByCredentials } from "@/db/queries";
import { redirect } from "next/navigation";


async function registerUser(formData) {
    const user = Object.fromEntries(formData)
    const created = await createUser(user);

    redirect("/login")
}

async function performLogin(formData) {

    try {
        const credential = {};
    credential.email = formData.get('email');
    credential.password = formData.get('password');

    const found = await FindUserByCredentials(credential);

    return found;
    } catch (error) {
        throw error
    }
    
}

export {
    registerUser,
    performLogin
}