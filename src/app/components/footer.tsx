export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-primary text-center text-white">
      <p className="text-sm">
        © {year} - Desenvolvido por <span className="font-semibold">Marciênio</span>
      </p>
    </footer>
  )
}
