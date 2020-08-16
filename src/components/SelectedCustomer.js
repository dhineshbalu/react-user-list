import React from 'react';
import DateList from "./DateList";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: '75%',
    height: '75%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: 'auto'
  },
}));

export default function SelectedCustomer({ selCust, onClose }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);
  const [dateList, setDateList] = React.useState({})
  const [selectedDate, setSelectedDate] = React.useState(null);

  React.useEffect(() => {
      if (selCust) {
        setDateList(selCust.activity_periods)
      }
  }, [])

  const handleClose = () => {
    setOpen(false);
    onClose()
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterDateList(date)
  };

  const filterDateList = (selDate) => {
     if (selCust && selCust.activity_periods) {
         let dates = []
         if (selDate) {
            dates = selCust.activity_periods.filter((l) => {
                let stTime =  new Date(l.start_time.split(' ')[0] + ' ' + l.start_time.split(' ')[1] + ' ' + l.start_time.split(' ')[2])
                let endTime = new Date(l.end_time.split(' ')[0] + ' ' + l.end_time.split(' ')[1] + ' ' + l.end_time.split(' ')[2])
                 return ((stTime.getDay() == selDate.getDay() && stTime.getMonth() == selDate.getMonth() && stTime.getYear() == selDate.getYear()) ||(endTime.getDay() == selDate.getDay() && endTime.getMonth() == selDate.getMonth() && endTime.getYear() == selDate.getYear()))
             })
         } else {
           dates = selCust.activity_periods
         }
        setDateList(dates)
     }
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <h2 style={{textAlign:'center'}}>Activity periods of {selCust.real_name}</h2>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} >
                <Button variant="contained" color="primary" onClick={() => {
                    setSelectedDate(null)
                    filterDateList(null)
                }}>
                    Show All Periods
                </Button>
            </Grid>
        </Grid>
        <DateList dateList={dateList}></DateList>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
