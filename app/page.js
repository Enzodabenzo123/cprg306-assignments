import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className = "font-bold text-4x1">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week-2 page</Link>
      <br></br>
      <Link href="/week-3">Week-3 page</Link>
      <br></br>
      <Link href="/week-4">Week-4 page</Link>
      <br></br>
      <Link href="/week-5">Week-5 page</Link>
      <br></br>
      <Link href="/week-6">Week-6 page</Link>
    </main>
  
  );
} 