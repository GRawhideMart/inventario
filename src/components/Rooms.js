import React, { useState, useEffect } from "react";
import Title from "./Title";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

import RoomDataService from "../services/rooms.service";
import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function preventDefault(event) {
  event.preventDefault();
}

const Rooms = (props) => {
  const [rooms, setRoom] = useState([]);
  useEffect(() => {
    RoomDataService.getAll()
      .then((response) => setRoom(response.data))
      .catch((error) => console.log(error));
  }, []);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Rooms</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>I.D.</TableCell>
            <TableCell>Stanza</TableCell>
            <TableCell align="right">Azioni</TableCell>
            {/*<TableCell align="right">Conta Oggetti</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room.id}>
              <TableCell>{room.id}</TableCell>
              <TableCell>{room.name}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="secondary"
                  aria-label="delete room"
                  onClick={() => RoomDataService.delete(room.id.toString()).then(()=> RoomDataService.getAll()).catch(e => console.log(e))}
                >
                  <Delete />
                </IconButton>
              </TableCell>

              {/*<TableCell align="right">{room.length === undefined ? room.length.toString() : '0'}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more rooms
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Rooms;
