export default function Footer() {
  return (
    <footer className="w-full mt-16 py-6 border-t border-gray-300 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} IM Blog. All rights reserved.
    </footer>
  );
}
