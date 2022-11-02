import { Slide, Snackbar } from "@mui/material";
const ShowMessage = () => {
    return <Snackbar
    anchorOrigin={{ horizontal:"right", vertical:"top"}}
    // TransitionComponent={<Slide direction="up"/>}
    open={true}
    // onClose={handleClose}
    message="KUNAL ZANKE"
    // key={vertical + horizontal}
  />
}

export default ShowMessage;