import { useLayoutContext } from "..";

export default function Header() {
  const pp = useLayoutContext();
  return (
    <header>
      <pre>{JSON.stringify({ pp })}</pre>
    </header>
  );
}
