import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function EditModal({ isOpen, setIsOpen, item, getTodo, api }) {
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    if (item) {
      setEditName(item.name || "");
      setEditDesc(item.description || "");
      setEditStatus(item.isCompleted || false);
    }
  }, [item]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  async function handleEditSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`${api}api/to-dos`, {
        id: item.id,
        name: editName,
        description: editDesc,
        isCompleted: editStatus
      });
      getTodo();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseModal}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        style: {
          backgroundColor: '#141414',
          border: '1px solid #1f1f1f',
          borderRadius: '16px',
          color: 'white',
          padding: '8px'
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: 'black', color: 'white', trackingWide: '1px', borderBottom: '1px solid #262626', pb: 1.5 }}>
        Edit Task
      </DialogTitle>
      <form onSubmit={handleEditSubmit}>
        <DialogContent sx={{ display: 'flex', backgroundColor: 'black', flexDirection: 'column', gap: 2.5, pt: 3 }}>
          <div>
            <label className="text-xs text-gray-400 font-bold block mb-1 tracking-wider">NAME</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full bg-[#1A1A1A] p-3 rounded-xl border border-gray-800 text-white focus:border-gray-600 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-400 font-bold block mb-1 tracking-wider">DESCRIPTION</label>
            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              rows="4"
              className="w-full bg-[#1A1A1A] p-3 rounded-xl border border-gray-800 text-white focus:border-gray-600 focus:outline-none resize-none transition-colors"
              required
            />
          </div>

          <div className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              id="status"
              checked={editStatus}
              onChange={(e) => setEditStatus(e.target.checked)}
              className="w-4 h-4 accent-[#CD856C] cursor-pointer"
            />
            <label htmlFor="status" className="text-sm text-gray-300 cursor-pointer select-none">
              Mark as Completed (Active)
            </label>
          </div>
        </DialogContent>

        <DialogActions sx={{ padding: '16px 24px', backgroundColor: 'black', borderTop: '1px solid #262626', gap: 1.5 }}>
          <Button
            onClick={handleCloseModal}
            type="button"
            variant="contained"
            sx={{
              flex: 1,
              backgroundColor: '#262626',
              color: 'white',
              '&:hover': { backgroundColor: '#404040' },
              borderRadius: '12px',
              py: 1.5,
              fontWeight: 'bold'
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              flex: 1,
              backgroundColor: '#CD856C',
              color: 'black',
              '&:hover': { backgroundColor: '#BC765D' },
              borderRadius: '12px',
              py: 1.5,
              fontWeight: 'bold'
            }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}