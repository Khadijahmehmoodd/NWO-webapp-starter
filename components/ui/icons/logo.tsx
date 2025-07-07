export default function Logo({ className = '', ...props }) {
  return (
    <img
      src="/image/logo.png"
      alt="Logo"
      className={className}
      width={32}
      height={32}
      {...props}
    />
  );
}
