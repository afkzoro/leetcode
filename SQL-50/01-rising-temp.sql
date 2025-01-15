SELECT 
    current_day.id 
FROM Weather current_day
JOIN Weather previous_day 
    ON current_day.recordDate = previous_day.recordDate + INTERVAL '1 day'
WHERE current_day.temperature > previous_day.temperature;