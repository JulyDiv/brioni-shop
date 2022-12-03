import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <section className="not-found">
      <h3 className="not-found__title">Ooops!</h3>
      <p className="not-found__text">
        Page not found
        <h4 className="not-found__title">Go to</h4>
        <Link href="/" className="not-found__link">
          {" "}
          Home page{" "}
        </Link>
        after 5 seconds...
      </p>
    </section>
  );
}
