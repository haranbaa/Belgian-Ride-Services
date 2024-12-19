<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book a Ride</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Book a Ride</h1>

        <!-- Display Success or Error Messages -->
        @if (session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Booking Form -->
        <form action="/book-ride" method="POST" class="mt-4">
            @csrf

            <!-- Pickup Location -->
            <div class="mb-3">
                <label for="pickup_location" class="form-label">Pickup Location</label>
                <input type="text" name="pickup_location" id="pickup_location" class="form-control" placeholder="Enter your pickup location" required>
            </div>

            <!-- Dropoff Location -->
            <div class="mb-3">
                <label for="dropoff_location" class="form-label">Dropoff Location</label>
                <input type="text" name="dropoff_location" id="dropoff_location" class="form-control" placeholder="Enter your dropoff location" required>
            </div>

            <!-- Ride Date -->
            <div class="mb-3">
                <label for="ride_date" class="form-label">Ride Date</label>
                <input type="date" name="ride_date" id="ride_date" class="form-control" required>
            </div>

            <!-- Ride Time -->
            <div class="mb-3">
                <label for="ride_time" class="form-label">Ride Time</label>
                <input type="time" name="ride_time" id="ride_time" class="form-control" required>
            </div>

            <!-- Ride Type -->
            <div class="mb-3">
                <label for="ride_type" class="form-label">Ride Type</label>
                <select name="ride_type" id="ride_type" class="form-select" required>
                    <option value="economy">Economy</option>
                    <option value="premium">Premium</option>
                    <option value="luxury">Luxury</option>
                </select>
            </div>

            <!-- Number of Passengers -->
            <div class="mb-3">
                <label for="passengers" class="form-label">Number of Passengers</label>
                <input type="number" name="passengers" id="passengers" class="form-control" min="1" placeholder="Enter number of passengers" required>
            </div>

            <!-- Contact Info -->
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" name="phone" id="phone" class="form-control" placeholder="Enter your phone number" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Enter your email" required>
            </div>

            <!-- Additional Requests -->
            <div class="mb-3">
                <label for="requests" class="form-label">Additional Requests</label>
                <textarea name="requests" id="requests" class="form-control" rows="3" placeholder="Enter any special requests"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary w-100">Book Ride</button>
        </form>
    </div>
</body>
</html>
