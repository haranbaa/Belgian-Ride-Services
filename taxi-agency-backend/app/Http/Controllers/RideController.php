<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;

class RideController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'pickup_location' => 'required|string',
            'dropoff_location' => 'required|string',
            'ride_date' => 'required|date',
            'ride_time' => 'required|date_format:Y-m-d\TH:i',
        ]);

        // Save the ride to the database
        Ride::create($validated);

        // Redirect to the success page
        return redirect('/success')->with('success', 'Ride booked successfully!');
    }
}