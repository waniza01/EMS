import { useDispatch, useSelector } from "react-redux";
import { venueActions } from "../store/VenueSlice";
import ManagementCard from "../components/Layout/ManagementCard";

import Table from "../components/Table";
import { VENUE_TABLE_COLUMNS } from "../util/GlobalConstants";
import VenueForm from "../components/VenueForm";

const Venue = () => {
  const rows = useSelector((state) => state.venue.venues);
  const dispatch = useDispatch(venueActions);
  let existingItem = useSelector((state) => state.venue.venue);

  const submitHandler = (data) => {
    console.log(data);
    dispatch(venueActions.addVenue(data));
    dispatch(venueActions.setVenue(-1));
  };

  const updateHandler = (id) => {
    dispatch(venueActions.setVenue(id));
  };

  const deleteHandler = (id) => {
    dispatch(venueActions.removeVenue(id));
  };

  return (
    <ManagementCard title="Venue Management">
      <div className="flex mt-4 gap-20 ">
        <VenueForm
          key={Math.random() * 999}
          title="Venue"
          item={existingItem && existingItem}
          submitHandler={submitHandler}
        />
        <Table
          title="Venue"
          columns={VENUE_TABLE_COLUMNS}
          rows={rows}
          updateTableColumns={["Edit", "Delete"]}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </ManagementCard>
  );
};

export default Venue;
