export default function RootLayout({ children }) {
  // global-error.js 用来处理根布局和根模板中的错误，
  // app/error.js 建议还是要写的
  return (
    <html lang="en">
      <body>
         <h2>Something went wrong!</h2>
        <button >Try again</button>
      </body>
    </html>
  );
}
