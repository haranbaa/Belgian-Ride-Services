<!DOCTYPE html>
<html>
<head>
    <title>Book a Ride</title>
</head>
<body>
    <h1>Book a Ride</h1>
    <form action="/book-ride" method="POST">
        @csrf
        <label for="pickup_location">Pickup Location:</label>
        <input type="text" name="pickup_location" id="pickup_location" required><br>

        <label for="dropoff_location">Dropoff Location:</label>
        <input type="text" name="dropoff_location" id="dropoff_location" required><br>

        <label for="ride_date">Ride Date:</label>
        <input type="date" name="ride_date" id="ride_date" required><br>

        <label for="ride_time">Ride Time:</label>
        <input type="datetime-local" name="ride_time" id="ride_time" required><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>