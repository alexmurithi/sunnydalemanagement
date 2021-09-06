import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles, lighten } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import red from "@material-ui/core/colors/red";
import DeleteDialog from "../Admin/PropertyItems/DeleteDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  highlight: {
    backgroundColor: lighten(theme.palette.primary.main, 0.65),
    color: theme.palette.primary.main,
  },
  title: {
    flex: "1 1 100%",
  },
  deleteIcon: {
    color: red[900],
  },
}));

const TableToolbar = ({ numSelected, ...rest }) => {
  const classes = useStyles();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  return (
    <>
      <Toolbar
        className={clsx(classes.root, { [classes.highlight]: numSelected > 0 })}
      >
        {numSelected > 0 ? (
          <Typography variant="h5" className={classes.title}>
            {numSelected} Selected
          </Typography>
        ) : (
          <Typography variant="h5" className={classes.title}>
            PropertyItems
          </Typography>
        )}

        {numSelected > 1 ? (
          <Tooltip title="Delete">
            <IconButton onClick={handleDeleteDialog}>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </Tooltip>
        ) : numSelected === 1 ? (
          <Box display="flex">
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon color="primary" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton onClick={handleDeleteDialog}>
                <DeleteIcon className={classes.deleteIcon} />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
      </Toolbar>
      <DeleteDialog
        open={openDeleteDialog}
        closeDeleteDialog={handleCloseDeleteDialog}
        numSelected={numSelected}
        {...rest}
      />
    </>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default React.memo(TableToolbar);
