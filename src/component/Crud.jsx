import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import EditModal from "../component/EditModal";
import InfoModal from "./InfoModal";

let api = "https://to-dos-api.softclub.tj/"

export default function Crud() {
  const [data, setData] = useState([]);

  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [infoItem, setInfoItem] = useState(null);

  const openEditModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const openInfoModal = (item) => {
    setInfoItem(item);
    setIsInfoOpen(true);
  };

  async function get() {
    try {
      let { data } = await axios.get(api + "api/to-dos")
      setData(data.data)
    } catch (error) {
      console.error(error);
    }
  }

  async function deletUser(id) {
    try {
      await axios.delete(api + "api/to-dos/" + id)
      get()
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    get()
  }, [])

  const filteredData = data?.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesStatus = true;
    if (filterStatus === "Active") matchesStatus = item.isCompleted === true;
    if (filterStatus === "Inactive") matchesStatus = item.isCompleted === false;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="flex justify-center gap-4 mb-10 max-w-[500px] mx-auto px-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#1A1A1A] text-white border border-gray-800 p-3 rounded-xl outline-none focus:border-gray-600 transition-colors"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-[#1A1A1A] text-white border border-gray-800 p-3 rounded-xl outline-none cursor-pointer w-[150px] focus:border-gray-600 transition-colors"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex gap-4 justify-center flex-wrap" style={{ marginBottom: '100px' }}>
        {
          filteredData?.map((item) => {
            const imgName = item.images && item.images.length > 0 ? item.images[0].imageName : null;
            return (
              <div className="text-white border w-[300px] p-3 text-center" key={item.id}>
                {imgName && <img src={`${api}${imgName}`} alt={item.name} className="w-32 h-32 object-cover mx-auto" />}
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p className={item.isCompleted ? "text-green-500" : "text-red-500"}>{item.isCompleted ? "Active" : "Inactive"}</p><br />
                <div className="flex gap-2">
                  <Button variant="contained" color="error" onClick={() => deletUser(item.id)}>Delete</Button>
                  <Button variant="contained" color="primary" onClick={() => openEditModal(item)}>Edit</Button>
                  <Button variant="contained" color="warning" onClick={() => openInfoModal(item)}>Info</Button>
                </div>
              </div>
            )
          })
        }
      </div>

      <EditModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        item={selectedItem}
        getTodo={get}
        api={api}
      />
      <InfoModal
        isOpen={isInfoOpen}
        setIsOpen={setIsInfoOpen}
        item={infoItem}
        api={api}
      />
    </>
  )
}