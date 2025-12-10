export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Perfusão IV — Indústria Farmacêutica.
      </div>
    </footer>
  );
}
