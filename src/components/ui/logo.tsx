import { SquareCheckBig } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex">
      <SquareCheckBig className="self-center" />
      <span className="ml-1 text-xl text-center">todo</span>
    </Link>
  );
}
