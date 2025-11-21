import { Cinzel } from "next/font/google";
import MenuBar from "@/components/MenuBar";

const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function Header() {
	return (
		<header className="bg-primary text-secondary w-full h-16 fixed top-0 left-0 flex justify-between items-center px-4">
			<h1 className={`${cinzel.className} text-md font-bold border-2 rounded-md px-2 py-1 sm:text-lg`}>ClenchStore</h1>
      <MenuBar />
		</header>
	);
}
