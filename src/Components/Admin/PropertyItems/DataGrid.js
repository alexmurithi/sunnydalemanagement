import React from "react";
import { Container, Typography } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { GET_ALL_PROPERTY_ITEMS } from "../../../GraphQL/Queries/GetAllPropertyItems";
import { useQuery } from "@apollo/client";

const PropertyItemsDataGrid = () => {
 

  // const handleEditRowsModelChange = React.useCallback((model) => {
  //   setEditRowsModel(model);
  // }, []);

  const { data, loading, error } = useQuery(GET_ALL_PROPERTY_ITEMS);
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "property", headerName: "Property", width: 150 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "title", headerName: "Title", width: 200, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 200,
      editable: true,
    },
    { field: "actions", headerName: "Actions", width: 200 },
  ];
  const rows = data.allPropertyItems.map((item) => ({
    id: item.id,
    property: item.property.name,
    type: item.propertyType.type,
    title: item.title,
    description: item.description,
    actions: <div>Edit</div>,
  }));

  return (
    <>
      <Container maxWidth="lg">
       
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
          align="center"
        >
          All Property Items
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          style={{ backgroundColor: "#fff" }}
          // onEditRowsModelChange={handleEditRowsModelChange}
          autoHeight
        />
      </Container>
    </>
  );
};

export default React.memo(PropertyItemsDataGrid);
