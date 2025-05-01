interface LogosProps {
  className?: string;
}

export default function Logos({ className = "" }: LogosProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">This is a react component</h2>
      <div className={`flex items-center justify-center gap-8 ${className}`}>
        <img src="/react-logo.svg" alt="React Logo" className="h-12 w-auto" />
        <img src="/astro-logo.svg" alt="Astro Logo" className="h-12 w-auto" />
        <img
          src="/tailwind-logo.svg"
          alt="Tailwind Logo"
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
}
