import "./globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout