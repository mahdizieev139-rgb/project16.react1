import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function InfoModal({ isOpen, setIsOpen, item, api }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          backgroundColor: '#2d3748',
          border: '1px solid #4a5568',
          borderRadius: '16px',
          color: 'white',
          padding: '8px'
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: 'black', borderBottom: '1px solid #4a5568', pb: 1.5, color: 'white' }}>
        Task Information
      </DialogTitle>
      <DialogContent sx={{ pt: 3, display: 'flex', backgroundColor: 'black', flexDirection: 'column', gap: 2 }}>
        {item && (
          <>
            {item.images && item.images.length > 0 && (
              <img
                src={`${api}${item.images[0].imageName}`}
                alt={item.name}
                className="w-full h-48 object-cover rounded-xl border border-gray-600"
              />
            )}
            <div>
              <h4 className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1">Name</h4>
              <p className="text-base font-semibold text-white">{item.name}</p>
            </div>
            <div>
              <h4 className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1">Description</h4>
              <p className="text-sm text-gray-200 whitespace-pre-wrap">{item.description}</p>
            </div>
            <div>
              <h4 className="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1">Status</h4>
              <p className={item.isCompleted ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                {item.isCompleted ? "Active (Completed)" : "Inactive (Incomplete)"}
              </p>
            </div>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ padding: '16px 24px', backgroundColor: 'black', borderTop: '1px solid #4a5568' }}>
        <Button
          onClick={() => setIsOpen(false)}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1a202c',
            color: 'gray',
            '&:hover': { backgroundColor: '#111827' },
            borderRadius: '12px',
            py: 1.2,
            fontWeight: 'bold'
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}