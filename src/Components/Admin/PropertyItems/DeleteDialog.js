import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import CustomButton from "../../Button";
import red from "@material-ui/core/colors/red";
import PropTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";

import { DELETE_PROPERTY_ITEMS } from "../../../GraphQL/Mutations/DeletePropertyItems";
import { GET_ALL_PROPERTY_ITEMS } from "../../../GraphQL/Queries/GetAllPropertyItems";
import { useMutation } from "@apollo/client";

const DeleteDialog = ({
  open,
  closeDeleteDialog,
  selected,
  numSelected,
  handleSelection,
}) => {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);

  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  const handleCloseSuccessSnackbar = () => {
    setOpenSuccessSnackbar(false);
  };
  const handleCloseErrorSnackbar = () => {
    setOpenErrorSnackbar(false);
  };

  const [deleteItem, { loading }] = useMutation(DELETE_PROPERTY_ITEMS, {
    onCompleted({ deletePropertyItems }) {
      if (deletePropertyItems) {
        handleSelection([]);
        closeDeleteDialog(true);
        setOpenSuccessSnackbar(true);
      }
    },
    update: (cache) => {},
    refetchQueries: [GET_ALL_PROPERTY_ITEMS, "getAllPropertyItems"],
    onError(error) {
      closeDeleteDialog(true);
      setOpenErrorSnackbar(true);
      return (
        <Snackbar
          open={openErrorSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseErrorSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MuiAlert
            onClose={handleCloseSuccessSnackbar}
            severity="error"
            variant="filled"
          >
            {`Items not Deleted ${error.message}`}
          </MuiAlert>
        </Snackbar>
      );
    },
  });

  const handleDeletePropertyItems = () => {
    deleteItem({ variables: { id: selected.map((i) => Number(i)) } });
  };

  return (
    <>
      <Dialog open={open} onClose={closeDeleteDialog}>
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h5">
            Are You Sure you want to Delete this item?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="subtitle2" component="div">
              By clicking on Delete button, you confirm to delete{" "}
              <strong>{numSelected}</strong> items. Otherwise click cancel
              button
            </Typography>
          </DialogContentText>
          <DialogActions>
            <CustomButton
              color="primary"
              variant="contained"
              style={{ width: 100 }}
              onClick={closeDeleteDialog}
            >
              Cancel
            </CustomButton>
            <CustomButton
              style={{ backgroundColor: red[600], color: "#fff", width: 100 }}
              variant="outlined"
              onClick={handleDeletePropertyItems}
            >
              {loading ? (
                <CircularProgress color="primary" size={24} />
              ) : (
                `Delete`
              )}
            </CustomButton>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSuccessSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseSuccessSnackbar}
          severity="success"
          variant="filled"
        >
          Items Deleted Successfully !
        </MuiAlert>
      </Snackbar>
    </>
  );
};

DeleteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDeleteDialog: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default React.memo(DeleteDialog);
