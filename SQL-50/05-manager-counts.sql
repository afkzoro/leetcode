WITH ManagerCounts AS (
   SELECT e.id, e.name, COUNT(*) as direct_reports
   FROM Employee e
   JOIN Employee reports ON reports.managerId = e.id
   GROUP BY e.id, e.name
   HAVING COUNT(*) >= 5
   ORDER BY direct_reports DESC
)
SELECT name FROM ManagerCounts;