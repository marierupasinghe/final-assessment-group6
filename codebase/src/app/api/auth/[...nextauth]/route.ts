import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from 'bcrypt' 
import { sql } from '@vercel/postgres'

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
          },
          async authorize(credentials, req) {
            //
            const response = await sql `select * from users where email=${credentials?.email}`;
            const user = response.rows[0];

            const passwordCorrect = await user.password == credentials?.password
      

            console.log(passwordCorrect)
            console.log(credentials?.email)
            console.log(credentials?.password)
            console.log(user.password)

            if (passwordCorrect){
                return {
                    id: user.id,
                    email: user.email
                }
            }
            return null;
          }
    })]
})

export {handler as GET, handler as POST};