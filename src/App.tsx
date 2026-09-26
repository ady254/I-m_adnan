import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BootProvider, useBoot } from "./context/BootContext";
import { LazyProvider } from "./context/LazyContext";
import { BootScreen } from "./components/BootScreen";
import { OSLayout } from "./components/OSLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Innvox } from "./pages/Innvox";
import { Projects } from "./pages/Projects";
import { Stack } from "./pages/Stack";
import { Thoughts } from "./pages/Thoughts";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

function AppRoutes() {
  const { hasBooted } = useBoot();

  if (!hasBooted) {
    return <BootScreen />;
  }

  return (
    <Routes>
      <Route element={<OSLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="innvox" element={<Innvox />} />
        <Route path="projects" element={<Projects />} />
        <Route path="stack" element={<Stack />} />
        <Route path="thoughts" element={<Thoughts />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <BootProvider>
        <LazyProvider>
          <AppRoutes />
        </LazyProvider>
      </BootProvider>
    </BrowserRouter>
  );
}
