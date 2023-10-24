import React, { useState } from 'react';

function Datepicker(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      // You can pass the selected date and time to the parent component or perform other actions.
      props.actions.afterSlotMessage(selectedDate, selectedTime);
    } else {
      alert('Please select both date and time');
    }
  };

  const renderDateButtons = () => {
    const today = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const buttons = [];

    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      const day = days[date.getDay()];
      const month = date.toLocaleString('default', { month: 'short' });
      const dayOfMonth = date.getDate();

      buttons.push(
        <button key={i} onClick={() => handleDateClick(date)}>
          {`${dayOfMonth} ${month}, ${day}`}
        </button>
      );
    }

    return buttons;
  };

  const renderTimeButtons = (times) => {
    return times.map((time) => (
      <button key={time} onClick={() => handleTimeClick(time)}>
        {time}
      </button>
    ));
  };

  const morningTimes = ['09:00 AM', '10:00 AM', '11:00 AM'];
  const noonTimes = ['02:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <div>
      <div>
        <div>{renderDateButtons()}</div>
        <div>
          <div>
            <p>MORNING</p>
            {renderTimeButtons(morningTimes)}
          </div>
          <div>
            <p>NOON</p>
            {renderTimeButtons(noonTimes)}
          </div>
        </div>
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default Datepicker;
