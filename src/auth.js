import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            id: "credentials",
            authorize: async (credentials) => {
                const user = { id: credentials.id, name: credentials.name, role: credentials.role, roleId: credentials.roleId, userType: credentials.userType }
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
                token.id = user.id
                token.name = user.name
                token.role = user.role
                token.roleId = user.roleId
                token.userType = user.userType
            }
            return token;
        },
        session({ session, token }) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.role = token.role
            session.user.roleId = token.roleId
            session.user.userType = token.userType
            return session;
        }
    }
})