export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white font-bold text-xl">MovieRadar</div>

        <p className="text-gray-400 text-sm">
          &copy; 2026 MovieRadar. All rights reserved.
        </p>

        <a
          href="https://github.com/ishayanalam/MovieRadar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition-colors text-sm font-medium"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
