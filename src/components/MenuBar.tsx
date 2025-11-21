"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MenuBar() {
	const [isopen, setIsOpen] = useState(false);
	return isopen ? (
		<>
			<X
				size={26}
				className="cursor-pointer ease-in-out duration-200"
				onClick={() => setIsOpen(false)}
			/>
      
		</>
	) : (
		<Menu
			size={26}
			className="cursor-pointer ease-in-out duration-200"
			onClick={() => setIsOpen(true)}
		/>
	);
}
