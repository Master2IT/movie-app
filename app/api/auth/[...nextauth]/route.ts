import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import {connectToDB} from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({session}) {
            const userSession = await User.findOne({
                email: session.user.email
            });

            session.user['id'] = userSession._id.toString()

            return session
        },
        async signIn({profile}: any) {
            try {
                await connectToDB()
                const userExists = await User.findOne({email: profile.email});

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.email.replace("@gmail.com", "").toLowerCase(),
                        name: profile.name.toLowerCase(),
                        image: profile.picture
                    })
                }

                return true;
            } catch (e) {
                console.log(e)
                return false;
            }
        }
    }
})

export {handler as GET, handler as POST}