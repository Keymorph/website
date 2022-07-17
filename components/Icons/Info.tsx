import { SVGProps } from "react";

export default function Info(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={32}
      viewBox={"2 2 44 44"}
      {...props}
    >
      <path d="M22.5 34.15h3.3V22h-3.3ZM24 18.5q.8 0 1.325-.525.525-.525.525-1.275 0-.8-.525-1.35T24 14.8q-.8 0-1.325.55-.525.55-.525 1.35 0 .75.525 1.275.525.525 1.325.525Zm0 25.8q-4.2 0-7.9-1.6t-6.45-4.35Q6.9 35.6 5.3 31.9 3.7 28.2 3.7 24q0-4.25 1.6-7.95t4.35-6.425Q12.4 6.9 16.1 5.3T24 3.7q4.25 0 7.95 1.6t6.425 4.325Q41.1 12.35 42.7 16.05q1.6 3.7 1.6 7.95 0 4.2-1.6 7.9t-4.325 6.45Q35.65 41.1 31.95 42.7q-3.7 1.6-7.95 1.6Z" />
    </svg>
  );
}
