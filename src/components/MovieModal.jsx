import { X, Star, Calendar, Clock } from "lucide-react";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const cleanSummary = movie.summary
    ? movie.summary.replace(/<[^>]+>/g, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-surface border border-border w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex justify-end p-2 border-b border-border bg-background/50 relative z-10">
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto">
          {/* Updated Movie Poster Section */}
          <div className="w-full h-80 sm:h-96 bg-gray-900 relative overflow-hidden flex justify-center items-center">
            {movie.image ? (
              <>
                {/* Background blurred image to fill the wide space */}
                <img
                  src={movie.image.original || movie.image.medium}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 pointer-events-none"
                />

                {/* Actual uncropped poster */}
                <img
                  src={movie.image.original || movie.image.medium}
                  alt={movie.name}
                  className="relative z-10 h-full max-w-full object-contain py-4 shadow-xl"
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          {/* Movie Details */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-white mb-3">{movie.name}</h2>

            {/* Genre Tags */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 bg-background border border-border rounded-full text-xs font-semibold text-gray-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-6 bg-background/50 p-3 rounded-lg border border-border inline-flex">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-accent" />
                <span>{movie.rating?.average || "N/A"}</span>
              </div>

              <div className="text-border">|</div>

              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-gray-400" />
                <span>
                  {movie.premiered ? movie.premiered.substring(0, 4) : "N/A"}
                </span>
              </div>

              <div className="text-border">|</div>

              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-gray-400" />
                <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-2">Overview:</h3>
              <p className="text-gray-400 leading-relaxed">{cleanSummary}</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="p-4 border-t border-border bg-background/50 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition-colors font-medium text-sm"
          >
            <X size={16} />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
