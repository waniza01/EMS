import { useSelector } from "react-redux";

const TableHeader = ({ title, columns, updateTableColumns }) => {
  const role = useSelector((state) => state.auth.role);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white relative">
      <caption className="p-5 w-full text-lg font-semibold text-left rtl:text-right text-gray-900 dark:text-white dark:bg-red-950">
        Our {title}
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-red-950/65 dark:text-black">
        <tr>
          {columns?.map((column) => (
            <th key={column} scope="col" className="px-6 py-3">
              {column}
            </th>
          ))}
          {role === "admin" ? (
            updateTableColumns?.map((col) => (
              <th key={col} scope="col" className="px-6 py-3">
                <span className="sr-only">{col}</span>
              </th>
            ))
          ) : (
            <th key="select" scope="col" className="px-6 py-3">
              <span className="sr-only">select</span>
            </th>
          )}
        </tr>
      </thead>
    </table>
  );
};

export default TableHeader;
