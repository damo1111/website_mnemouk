export function LogoMark({ className = "h-7 w-auto" }) {
  return (
    <img
      src={"/mnemo-mark.png?v=3"}
      alt="Mnemo logomark"
      className={className}
      height={28}
      style={{ width: "auto", objectFit: "contain", display: "block" }}
    />
  );
}
