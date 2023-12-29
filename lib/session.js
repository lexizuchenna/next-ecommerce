import { withIronSession } from "iron-session/next";

const sessionOptions = {
  password: "your-secret-password-here",
  cookieName: "user",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 24 hours in seconds
  },
};

export const withSession = withIronSession(async (req, res) => {
  // Initialize or update session data here
  if (!req.session.get("user")) {
    req.session.set("user", { id: 1, username: "example" });
  }
}, sessionOptions);

export default withSession;
