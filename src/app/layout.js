import "./globals.css";

export const metadata = {
  title: "DevConnectOverview",
  description: "A web app where users create profiles, showcase projects, and get feedback from others.",
};



import AppWrapper from "./components/app_wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}