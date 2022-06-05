import React from "react";
import { Stack } from "@mui/material";
import Meta from "@components/Meta";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import ActiveButton from "@components/Buttons/ActiveButton";
// import InactiveButton from "@components/Buttons/InactiveButton";
import Checkbox from "@mui/material/Checkbox";

const binMatrix = Array(12)
  .fill(0)
  .map(() => Array(22).fill(0));

function Step2() {
  return (
    <div style={{ padding: "0 2rem" }}>
      <Meta title="Step 2/5 - New Opening" />
      <Stack spacing={2}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          <h1>Proforma</h1>
        </Stack>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ paddingBottom: 10 }}
        >
          <h2>Step 2/5 Basic Details</h2>
          <TableContainer
            component={Paper}
            sx={{ minWidth: 330, maxWidth: 100 }}
          >
            <Table
              sx={{ minWidth: 300, maxWidth: 1900, backgroundColor: "#ebebeb" }}
              aria-label="simple table"
            >
              <TableBody>
                {binMatrix.map((row) => (
                  <TableRow key="">
                    {row.map(() => (
                      <TableCell key="" component="th" scope="row">
                        <Checkbox />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {/* <TableRow>
                  <TableCell align="center">
                    <ActiveButton sx={{ width: 100 }}>Next</ActiveButton>
                  </TableCell>
                  <TableCell align="center">
                    <InactiveButton sx={{ width: 100 }}>Reset</InactiveButton>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </div>
  );
}

Step2.layout = "companyPhaseDashboard";
export default Step2;
