import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      {/* Icon */}
      <div className="bg-amber-100 rounded-full p-8 shadow-sm">
        <NotebookIcon className="size-10 text-amber-700" />
      </div>

      {/* Heading */}
      <h3 className="text-2xl font-bold text-amber-800">No notes yet</h3>

      {/* Description */}
      <p className="text-stone-600">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>

      {/* CTA Button */}
      <Link
        to="/create"
        className="btn bg-amber-600 hover:bg-amber-700 text-white shadow-md"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;