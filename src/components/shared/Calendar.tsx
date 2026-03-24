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
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Date picker">
      <div className={styles.calendar} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button className={styles.navButton} onClick={handlePrevMonth} aria-label="Previous month">‹</button>
          <h3 className={styles.monthYear} aria-live="polite">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button className={styles.navButton} onClick={handleNextMonth} aria-label="Next month">›</button>
        </div>
        <div className={styles.weekdays} role="row">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className={styles.weekday} role="columnheader" aria-label={day}>{day}</div>
          ))}
        </div>
        <div className={styles.days} role="grid">
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
                aria-label={`${monthNames[currentMonth.getMonth()]} ${day}, ${currentMonth.getFullYear()}`}
                aria-selected={isSelected}
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
