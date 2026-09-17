import { X, Star, Calendar, Clock } from "lucide-react";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  // Clean the HTML tags from the summary
  const summaryText = movie.summary
    ? movie.summary.replace(/<[^>]+>/g, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border w-full max-w-2xl rounded-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-3 border-b border-border">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div className="w-full h-80 bg-background flex justify-center py-4 border-b border-border">
            {movie.image ? (
              <img
                src={movie.image.original || movie.image.medium}
                alt={movie.name}
                className="h-full object-contain"
              />
            ) : (
              <div className="flex items-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-4">{movie.name}</h2>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-gray-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
              <span className="flex items-center gap-1.5">
                <Star size={18} className="text-accent" />
                {movie.rating?.average || "N/A"}
              </span>

              <span className="text-gray-600">|</span>

              <span className="flex items-center gap-1.5">
                <Calendar size={18} className="text-gray-400" />
                {movie.premiered ? movie.premiered.substring(0, 4) : "N/A"}
              </span>

              <span className="text-gray-600">|</span>

              <span className="flex items-center gap-1.5">
                <Clock size={18} className="text-gray-400" />
                {movie.runtime ? `${movie.runtime} min` : "N/A"}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">Overview:</h3>
              <p className="text-gray-400 leading-relaxed">{summaryText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
