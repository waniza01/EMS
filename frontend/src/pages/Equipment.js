import { useDispatch, useSelector } from "react-redux";
import { equipmentActions } from "../store/EquipmentSlice";
import ManagementCard from "../components/Layout/ManagementCard";
import FoodEquipForm from "../components/FoodEquipForm";
import Table from "../components/Table";
import { FOOD_EQUIPMENT_TABLE_COLUMNS } from "../util/GlobalConstants";

const Equipment = () => {
  const rows = useSelector((state) => state.equipment.items);
  const dispatch = useDispatch(equipmentActions);
  let existingItem = useSelector((state) => state.equipment.item);

  const submitHandler = (data) => {
    dispatch(equipmentActions.addEquipmentItem(data));
    dispatch(equipmentActions.setEquipmentItem(-1));
  };

  const updateHandler = (id) => {
    dispatch(equipmentActions.setEquipmentItem(id));
  };

  const deleteHandler = (id) => {
    dispatch(equipmentActions.removeEquipmentItem(id));
  };

  return (
    <ManagementCard title="Equipment Management">
      <div className="flex mt-4 gap-20 ">
        <FoodEquipForm
          key={Math.random() * 999}
          title="Equipment"
          item={existingItem && existingItem}
          submitHandler={submitHandler}
        />
        <Table
          title="Equipment"
          columns={FOOD_EQUIPMENT_TABLE_COLUMNS}
          rows={rows}
          updateTableColumns={["Edit", "Delete"]}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </ManagementCard>
  );
};

export default Equipment;
