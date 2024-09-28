import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const NotificationsCalendar = () => {
  const [value, setValue] = useState(new Date());  // Current selected date
  const [reminders, setReminders] = useState([]);  // List of reminders
  const [newReminder, setNewReminder] = useState('');  // Input for the new reminder

  // Handle selecting a date on the calendar
  const handleDateChange = (date) => {
    setValue(date);
  };

  // Handle adding a reminder
  const handleAddReminder = () => {
    if (newReminder.trim() === '') return;

    const reminder = {
      date: value.toDateString(),
      reminderText: newReminder,
    };

    setReminders([...reminders, reminder]);
    setNewReminder('');
  };

  // Get reminders for the selected date
  const remindersForSelectedDate = reminders.filter(
    (reminder) => reminder.date === value.toDateString()
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Notifications & Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          {/* Calendar Component */}
          <Calendar onChange={handleDateChange} value={value} />
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-green-600">Selected Date: {value.toDateString()}</h2>
            <input
              type="text"
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              placeholder="Add a reminder"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
            />
            <button
              onClick={handleAddReminder}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Reminder
            </button>
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-green-600">Reminders for {value.toDateString()}</h2>
          {remindersForSelectedDate.length > 0 ? (
            <ul className="list-disc pl-6 mt-2">
              {remindersForSelectedDate.map((reminder, index) => (
                <li key={index} className="text-gray-700">
                  {reminder.reminderText}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">No reminders for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsCalendar;
