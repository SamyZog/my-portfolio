import * as React from "react";

function SvgLogo({ title, titleId, ...props }) {
  return (
    <svg
      id="logo_svg__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 492.6 512"
      xmlSpace="preserve"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>
        {
          ".logo_svg__st0{fill:#5a189a}.logo_svg__st1{fill:#7b2cbf}.logo_svg__st2{fill:#9d4edd}"
        }
      </style>
      <path
        className="logo_svg__st0"
        d="M0 50.1h89.7v185H0zM402.9 234.4h89.7v185h-89.7z"
      />
      <path
        className="logo_svg__st1"
        d="M.6 94.7l-.6-.9V1L1.3.1l245.3 91.6.7.9v92.9l-1.3.9z"
      />
      <path
        className="logo_svg__st1"
        d="M246.3 185.5L1 93.8V1l245.3 91.6zM.6 257.4l-.6-.9v-92.8l1.3-.9 245.3 91.7.7.9v92.8l-1.3.9z"
      />
      <path
        className="logo_svg__st1"
        d="M246.3 348.2L1 256.5v-92.8l245.3 91.7zM.6 420.3l-.6-.9v-92.8l1.3-.9 245.3 91.6.7.9v92.9l-1.3.9z"
      />
      <path
        className="logo_svg__st1"
        d="M246.3 511.1L1 419.4v-92.8l245.3 91.6z"
      />
      <path
        className="logo_svg__st2"
        d="M245.3 185.5V92.6l.7-.9L491.3.1l1.3.9v92.8l-.6.9-245.4 91.7z"
      />
      <path
        className="logo_svg__st2"
        d="M246.3 92.6L491.6 1v92.8l-245.3 91.7zM245.3 348.2v-92.8l.7-.9 245.3-91.7 1.3.9v92.8l-.6.9-245.4 91.7z"
      />
      <path
        className="logo_svg__st2"
        d="M246.3 255.4l245.3-91.7v92.8l-245.3 91.7zM245.3 511.1v-92.9l.7-.9 245.3-91.6 1.3.9v92.8l-.6.9L246.6 512z"
      />
      <path
        className="logo_svg__st2"
        d="M246.3 418.2l245.3-91.6v92.8l-245.3 91.7z"
      />
    </svg>
  );
}

export default SvgLogo;
