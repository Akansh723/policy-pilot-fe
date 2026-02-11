import React, { useState } from 'react';
import styles from './Calendar.module.css';

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onClose: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelect, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onSelect(selected);
    onClose();
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.calendar} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.navButton} onClick={handlePrevMonth}>‹</button>
          <h3 className={styles.monthYear}>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button className={styles.navButton} onClick={handleNextMonth}>›</button>
        </div>
        <div className={styles.weekdays}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className={styles.weekday}>{day}</div>
          ))}
        </div>
        <div className={styles.days}>
          {blanks.map(i => <div key={`blank-${i}`} className={styles.blank} />)}
          {days.map(day => {
            const isSelected = selectedDate?.getDate() === day && 
                              selectedDate?.getMonth() === currentMonth.getMonth() &&
                              selectedDate?.getFullYear() === currentMonth.getFullYear();
            return (
              <button
                key={day}
                className={isSelected ? styles.daySelected : styles.day}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
