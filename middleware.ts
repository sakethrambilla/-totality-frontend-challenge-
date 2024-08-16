import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      // verify token and return a boolean
      const sessionToken = req.cookies.get("next-auth.session-token");
      const secureSessionToken = req.cookies.get(
        "__Secure-next-auth.session-token",
      );
      if (sessionToken || secureSessionToken) return true;
      else return false;
    },
  },
});

export const config = {
  matcher: ["/profile/:path*"],
};
