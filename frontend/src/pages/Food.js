import FoodEquipForm from "../components/FoodEquipForm";
import ManagementCard from "../components/Layout/ManagementCard";
import Table from "../components/Table";
import { FOOD_EQUIPMENT_TABLE_COLUMNS } from "../util/GlobalConstants";
import { useDispatch, useSelector } from "react-redux";
import { foodAction } from "../store/FoodSlice";
import { API_HANDLER } from "../apis/ApiHandler";

const Food = () => {
  const rows = useSelector((state) => state.food.items);
  const dispatch = useDispatch(foodAction);
  let existingItem = useSelector((state) => state.food.item);

  const submitHandler = async (data) => {
    const fd = new FormData();

    // const resData = await API_HANDLER.ADD_FOOD(data);

    console.log(fd);
    dispatch(foodAction.addFoodItem(data));
    dispatch(foodAction.setFoodItem(-1));
  };

  const updateHandler = (id) => {
    dispatch(foodAction.setFoodItem(id));
  };

  const deleteHandler = (id) => {
    dispatch(foodAction.removeFoodItem(id));
  };

  return (
    <ManagementCard title="Food Management">
      <div className="flex mt-4 gap-20 ">
        <FoodEquipForm
          key={Math.random() * 999}
          title="Food"
          item={existingItem && existingItem}
          submitHandler={submitHandler}
        />
        <Table
          title="Food"
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

export default Food;
