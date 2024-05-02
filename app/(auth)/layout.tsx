import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center flex-col min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <Link href="/" className="w-36 mb-8">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={128}
          height={38}
        />
      </Link>
      {children}
    </div>
  );
};

export default Layout;
