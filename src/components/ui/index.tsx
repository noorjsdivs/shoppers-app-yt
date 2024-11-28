const Table = ({ children }: React.PropsWithChildren) => (
  <div className="w-full overflow-auto">
    <table className="w-full caption-bottom text-sm">{children}</table>
  </div>
);
export const TableHeader = ({ children }: React.PropsWithChildren) => (
  <thead>{children}</thead>
);

export const TableBody = ({ children }: React.PropsWithChildren) => (
  <tbody>{children}</tbody>
);

export const TableRow = ({ children }: React.PropsWithChildren) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    {children}
  </tr>
);

export const TableHead = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
  >
    {children}
  </th>
);

export const TableCell = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
  </td>
);

// Card components defined inline
export const Card = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

export const CardTitle = ({ children }: React.PropsWithChildren) => (
  <h3 className="text-2xl font-semibold leading-none tracking-tight">
    {children}
  </h3>
);

export const CardContent = ({ children }: React.PropsWithChildren) => (
  <div className="p-6 pt-0">{children}</div>
);

// Badge component defined inline
export const Badge = ({
  children,
  variant = "default",
}: React.PropsWithChildren<{
  variant?: "default" | "success" | "destructive";
}>) => {
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    success: "bg-green-500 text-white",
    destructive: "bg-red-500 text-white",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
};

export const Button = ({
  children,
  onClick,
  variant = "default",
  className = "",
}: React.PropsWithChildren<{
  onClick?: () => void;
  variant?: "default" | "delete" | "demo";
  className?: string;
}>) => {
  const baseClasses =
    "h-10 py-2 w-40 rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex items-center gap-1 justify-center duration-300";

  const variantClasses = {
    default: "bg-black text-white hover:bg-black/80",
    delete: "bg-red-600 text-white hover:bg-red-700",
    demo: "bg-blue-600 text-white hover:bg-blue-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Table;
