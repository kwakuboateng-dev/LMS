import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      width={100}
      height={100}
      src="/logo.svg"
      alt="Logo"
    />
  );
}
