import { Add, Delete } from "@material-ui/icons";
import {
  Box,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import Input from "components/input/input";
import { useState } from "react";

const TableCustom = ({
  tableConfig,
  tableValue,
  handleChangeInputRow,
  handleDeleteRowSeleted,
  handleDeleteRow,
  handleAddRow,
}) => {
  const [selected, setSelected] = useState([]);

  const handleChecked = (index) => {
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
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

  const handleCheckedAll = (event) => {
    if (event.target.checked) {
      const newSelected = tableValue.map((_, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const selectedLength = selected.length;
  const rows = tableValue.length;
  const indeterminate = selectedLength > 0 && selectedLength < rows;
  const hasCheckedAll = rows > 0 && selectedLength === rows;

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingX={"9px"}
        paddingY={"5px"}
        bgcolor={
          selectedLength > 0 ? "rgba(25, 118, 210, 0.08)" : "transparent"
        }
      >
        {selectedLength === 0 ? (
          <Typography variant="h5">Danh sách quảng cáo</Typography>
        ) : (
          <Typography variant="h6">{selectedLength} được chọn</Typography>
        )}
        <Box paddingX={"6px"}>
          {selectedLength > 0 && (
            <Tooltip title="Xóa">
              <IconButton
                onClick={() => {
                  handleDeleteRowSeleted(selected);
                  setSelected([]);
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Thêm">
            <IconButton onClick={handleAddRow}>
              <Add />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width={"40px"} sx={{ paddingInline: 0 }}>
                <Checkbox
                  indeterminate={!!indeterminate}
                  disabled={rows === 0}
                  checked={hasCheckedAll}
                  onChange={handleCheckedAll}
                />
              </TableCell>
              {tableConfig.map((item) => (
                <TableCell key={item.key}>
                  <Typography>{item.name}</Typography>
                </TableCell>
              ))}
              <TableCell width={"50px"}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableValue.map((row, index) => {
              const isSelected = selected.includes(index);

              return (
                <TableRow hover key={index} selected={isSelected}>
                  <TableCell sx={{ paddingInline: 0 }}>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => handleChecked(index)}
                    />
                  </TableCell>
                  {tableConfig.map((item) => (
                    <TableCell key={item.key}>
                      <Input
                        error={item.error(row[item.key])}
                        type={item.type}
                        name={item.key}
                        value={row[item.key]}
                        onChange={(name, value) =>
                          handleChangeInputRow(index, name, value)
                        }
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Tooltip
                      title={"Xóa"}
                      disabled={isSelected}
                      onClick={() => handleDeleteRow(index)}
                    >
                      <IconButton>
                        <Delete fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCustom;
