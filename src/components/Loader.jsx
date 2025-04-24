// components/Loader.jsx
export default function Loader() {
    return (
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid" />
      </div>
    );
  }
  