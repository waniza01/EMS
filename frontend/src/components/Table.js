import { useSelector } from "react-redux";
import TableHeader from "./UI/TableHeader";

const Table = ({
  customStyles,
  title,
  columns,
  updateTableColumns,
  rows,
  updateHandler,
  deleteHandler,
}) => {
  const role = useSelector((state) => state.auth.role);
  return (
    <div className="w-[70%] relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableHeader
        title={title}
        columns={columns}
        updateTableColumns={updateTableColumns}
      />
      <div className="overflow-y-scroll h-[50vh] bg-red-950 rounded-b-md ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white relative">
          <tbody>
            {rows?.map((row) => (
              <tr
                key={row.id}
                className=" bg-white border-b dark:bg-red-950 dark:border-red-900 hover:bg-red-900 text-white cursor-pointer"
              >
                {Object.entries(row).map(([key, value]) => {
                  if (key !== "image") {
                    return (
                      <td key={key} className="px-6 py-4">
                        {value}
                      </td>
                    );
                  }
                })}
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-yellow-300 hover:underline"
                    onClick={() => updateHandler(row.id)}
                  >
                    {role === "admin" ? " Edit" : "Select"}
                  </a>
                </td>
                {role === "admin" && (
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-yellow-300 hover:underline"
                      onClick={() => deleteHandler(row.id)}
                    >
                      Delete
                    </a>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
