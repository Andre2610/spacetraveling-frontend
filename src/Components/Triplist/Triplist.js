import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  lighten,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import BookingForm from "../BookingForm/BookingForm";
import { selectToken } from "../../Store/user/selectors";
import { selectUser } from "../../Store/user/selectors";

//stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

import Login from "../Auth/Login";
import Signup from "../Auth/SignUp";

const stripePromise = loadStripe(
  "pk_test_51H4q6NJAyfM1fq6sEwTl9TPoJMud7gCiokANtJMluBYpWDXaj093V4PAfaABpH1vMki2der1mBFHM1vjRhs8DGUL00JFdEJO1Q"
);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Departure Date",
  },
  {
    id: "destination",
    numeric: false,
    disablePadding: false,
    label: "Destination",
  },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  {
    id: "distance",
    numeric: true,
    disablePadding: false,
    label: "Distance in Km",
  },
  {
    id: "checkMark",
    numeric: true,
    disablePadding: false,
    label: <CheckRoundedIcon />,
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tablehead}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              className={classes.tableheadtext}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}>
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div">
          Choose your flight
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
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
  bookbutton: {
    color: "#ffffff",
    backgroundColor: "#aa0d00",
    marginTop: "1vh",
    float: "right",
  },
  tablehead: {
    backgroundColor: "#aa0d00",
  },
  tableheadtext: {
    color: "#ffffff",
    textAlign: "bold",
    "&:hover": {
      color: "#ffa000",
    },
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState({ id: null });
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const token = useSelector(selectToken);
  const [toggleLogin, setToggleLogin] = useState(false);

  const user = useSelector(selectUser);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(trip) {
    const { id, departingDate, price } = trip;
    const { distance, name } = trip.planet;
    return { id, departingDate, name, price, distance };
  }

  const rows = props.trips.map((trip) => {
    return createData(trip);
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const handleChange = (row) => {
    console.log("value:", row);
    setSelected(row);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <RadioGroup aria-label="flights" name="flights">
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table">
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow hover key={row.id}>
                        <TableCell
                          component="th"
                          align="center"
                          id={labelId}
                          scope="row"
                          padding="none">
                          {row.departingDate}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                        <TableCell align="center">{row.distance}</TableCell>
                        <TableCell align="center">
                          <FormControlLabel
                            value={row.id}
                            onClick={(e) => handleChange(row)}
                            control={
                              <Radio
                                color="primary"
                                checked={
                                  parseInt(selected.id) === parseInt(row.id)
                                }
                              />
                            }
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </RadioGroup>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />

        {!token ? (
          <Button className={classes.bookbutton} onClick={handleOpen}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="auth-modal-login-signup"
              aria-describedby="auth-modal-login-signup"
              variant="contained"
              color="primary">

              <DialogTitle>Login to book your trip</DialogTitle>
              <Login />
            </Dialog>
            BOOK YOUR TRIP!
          </Button>
        ) : (
          <Elements stripe={stripePromise}>
            <BookingForm tripData={selected} userData={user} />
          </Elements>
        )}
      </Paper>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            checked={dense}
            onChange={handleChangeDense}
          />
        }
        label="Dense padding"
      />
    </div>
  );
}
