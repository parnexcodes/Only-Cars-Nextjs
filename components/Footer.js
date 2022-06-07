import React from "react";

function Footer() {
  return (
    <div>
      <div className="sticky top-[100vh] pb-4">
        <p className="text-gray-300 text-sm text-center">
          Built with ❤ by{" "}
          <a
            className="font-bold"
            href="https://twitter.com/parnexcodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            parnex
          </a>
        </p>
        <p className="text-gray-300 text-sm text-center">Powered by NextJS</p>
      </div>
    </div>
  );
}

export default Footer;
