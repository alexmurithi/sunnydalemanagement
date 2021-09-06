import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Checkbox,
} from "@material-ui/core";

import { GET_ALL_PROPERTY_ITEMS } from "../../../GraphQL/Queries/GetAllPropertyItems";
import { useQuery } from "@apollo/client";

import TableToolbar from "../../Table/TableToolbar";
import CustomTableHead from "../../Table/CustomTableHead";
import { truncate } from "../../../Utils/truncate";

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const PropertyItemsTable = () => {
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const { loading, data, error } = useQuery(GET_ALL_PROPERTY_ITEMS);
  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;

  const rows = data.allPropertyItems.map((item) => ({
    id: item.id,
    property: item.property.name,
    type: item.propertyType.type,
    rooms: item.no_of_rooms,
    bathrooms: item.no_of_bathrooms,
    title: item.title,
    description: item.description,
    county: item.county,
    town: item.town,
  }));

  console.log("Selected", selected);
  return (
    <>
      <Paper elevation={1} square>
        <TableToolbar numSelected={selected.length} selected={ selected}/>
        <TableContainer>
          <Table>
            <CustomTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          color="primary"
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.id}
                      </TableCell>
                      <TableCell>{row.property}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.rooms}</TableCell>
                      <TableCell>{row.bathrooms}</TableCell>
                      <TableCell>{truncate(row.description, 100)}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data.allPropertyItems ? rows.length : -1}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default React.memo(PropertyItemsTable);
