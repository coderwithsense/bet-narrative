import { DecodedToken } from "@/types/userToken";
import { prismadb } from "./prismadb";

async function checkOrCreateUser(authState: DecodedToken) {
    // Check if user exists in the database
    const user = prismadb.user.findFirst({
        where: {
            username: authState.username,
        },
    });
    // If user does not exist, create a new user
    if (!user) {
        console.log("User does not exist, creating a new user");
        const newUser = prismadb.user.create({
            data: {
                username: authState.username,
                walletAddress: authState.eth_address,
            },
        });
        return newUser;
    }

    return user;
}

export { checkOrCreateUser };