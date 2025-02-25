import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            id: "credentials",
            authorize: async (credentials) => {
                const user = { id: credentials.id, name: credentials.name, role: credentials.role }
                if (user) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.name = user.name
                token.id = user.id
            }
            return token;
        },
        session({ session, token }) {
            session.user.role = token.role
            session.user.name = token.name
            session.user.id = token.id
            return session;
        }
    }
})