import ManagementCard from "../components/Layout/ManagementCard";
import Table from "../components/Table";
import { BOOKING_TABLE_COLUMNS } from "../util/GlobalConstants";

const ViewBookings = () => {
  return (
    <ManagementCard title="All Bookings">
      <div className="flex justify-center items-center mt-10">
        <Table
          title="Bookings"
          columns={BOOKING_TABLE_COLUMNS}
          rows={[]}
          //   updateTableColumns={["Edit", "Delete"]}
          //   updateHandler={updateHandler}
          //   deleteHandler={deleteHandler}
        />
      </div>
    </ManagementCard>
  );
};

export default ViewBookings;
