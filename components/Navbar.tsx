import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '#about', text: 'من أنا' },
    { href: '#services', text: 'الخدمات' },
    { href: '#curriculum', text: 'المناهج' },
    { href: '#contact', text: 'التواصل' },
  ];

  return (
    <nav className="flex justify-center gap-4 bg-teal-700 p-4 text-white">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="text-l hover:text-yellow-300">
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
