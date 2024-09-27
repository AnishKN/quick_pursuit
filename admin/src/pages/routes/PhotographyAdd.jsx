import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { MuiFileInput } from 'mui-file-input'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const fabStyle = {
  position: 'absolute',
  bottom: 20,
  right: 20,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PhotographyAdd(props) {
  const pathnames = props.pathname.split('/').filter((x) => x);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = React.useState(null)
  const [disabled, setDisabled] = React.useState(true)

  const handleChange = (newFile) => {
    setFile(newFile)
    setDisabled(false)
  }

  
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        px: 2,
      }}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mb: 2 }}
      >
        <Link
          underline="none"
          color="inherit"
        >
          Admin
        </Link>

        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography key={to} color="text.primary">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <Link
              underline="none"
              key={to}
              color="inherit"
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          );
        })}

      </Breadcrumbs>

      {/* Content Area */}
      <div className="flex">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <MuiFileInput value={file} onChange={handleChange} clearIconButtonProps={{
              title: "Remove",
              children: <CloseIcon fontSize="small" />
            }}

              InputProps={{
                startAdornment: <p><AttachFileIcon /><span className='px-2'></span> Select a file</p>
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              onClick={() => {
                console.log(file);
                handleClose()
              }}
              disabled={disabled}
            >
              Upload file
            </Button>
          </Box>
        </Modal>


        <Fab onClick={handleOpen} color="primary" aria-label="add" style={fabStyle}>
          <AddIcon />
        </Fab>
      </div>
    </Box>
  );
}

export default PhotographyAdd;
