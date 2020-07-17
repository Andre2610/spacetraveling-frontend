import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2vh 0",
    padding: "1.5vh 5vw 0.5vh 5vw",
    backgroundColor: theme.palette.selectBackground.main,
    borderRadius: "0.5rem",
  },
  btnBox: {
    width: "100%",
  },
  btn: {
    marginTop: "1vh",
    float: "right",
    alignSelf: "right",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
    minWidth: 120,
  },
  select: {
    backgroundColor: theme.palette.selectMenu.main,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  h2: {
    fontWeight: "800",
  },
}));

export default function PlanetForm(props) {
  const { set_selectFilter, selectFilter } = props;
  const classes = useStyles();

  function handleChange(e) {
    set_selectFilter(e.target.value);
  }

  const showButton = props.show ? (
    <Box className={classes.btnBox}>
      <Button
        className={classes.btn}
        component={Link}
        to="/booking"
        color="primary"
        variant="contained"
      >
        Book here
      </Button>
    </Box>
  ) : null;

  return (
    <Box className={classes.root}>
      <Typography component="h2" className={classes.h2}>
        Where to next?
      </Typography>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">
          Choose your next destination...
        </InputLabel>
        <Select
          native
          fullWidth
          className={classes.select}
          value={selectFilter}
          onChange={(e) => handleChange(e)}
          inputProps={{
            name: "age",
            id: "filled-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {props.planetData.map((planet) => {
            return (
              <option key={planet.id} value={planet.id}>
                {planet.name}
              </option>
            );
          })}
        </Select>
        {showButton}
      </FormControl>
    </Box>
  );
}
