import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const CustomTableHead = ({
  numSelected,
  order,
  orderBy,
  rowCount,
  onSelectAllClick,
  onRequestSort,
}) => {
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    { field: "id", headerName: "ID", numeric: true },
    { field: "property", headerName: "Property", numeric: false },
    { field: "type", headerName: "Property Type", numeric: false },
    { field: "title", headerName: "Title", numeric: false },
    { field: "rooms", headerName: "Rooms", numeric: false },
    { field: "bathrooms", headerName: "Bath Rooms", numeric: false },
    { field: "description", headerName: "Description", numeric: false },
  ];
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all" }}
              color="primary"
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.field}
              padding="normal"
              align={headCell.numeric ? "right" : "left"}
              sortDirection={orderBy === headCell.field ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.field}
                direction={orderBy === headCell.field ? order : "asc"}
                onClick={createSortHandler(headCell.field)}
              >
                {headCell.headerName}

                {orderBy === headCell.field ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

CustomTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default React.memo(CustomTableHead);
