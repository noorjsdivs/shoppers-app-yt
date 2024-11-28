const Loader = ({ title }: { title?: string }) => {
  return (
    <div className="w-full min-h-screen bg-accent/70 flex flex-col items-center justify-center z-50">
      <div className="relative w-12 h-12">
        <svg
          className="animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.75V6.25"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1266 6.87347L16.0659 7.93413"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.25 12L17.75 12"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1266 17.1265L16.0659 16.0659"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.75V19.25"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9342 16.0659L6.87354 17.1265"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 12L4.75 12"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.9342 7.93413L6.87354 6.87347"
            stroke="darkOrange"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {title && (
        <h3 className="text-white font-semibold text-xl tracking-wide mt-2">
          {title}
        </h3>
      )}
    </div>
  );
};

export default Loader;
