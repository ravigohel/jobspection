import React from "react";

export default function Footer() {
  return (
    <footer className="bg-main text-white mt-5 p-3 text-center">
      Copyright &copy; {new Date().getFullYear()} Jobspection Inc.
    </footer>
  );
}
