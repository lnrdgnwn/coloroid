import ColorPalette from "../../components/generate/ColorPalette";
import Nav from "../../components/Nav";

export default function Generate() {
  return (
    <section className="h-screen w-screen flex flex-col overflow-hidden">
      <Nav />
      <ColorPalette />
    </section>
  );
}
