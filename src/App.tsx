import Router from "@/system/router";
import ThemeProvider from "@/system/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};
export default App;
