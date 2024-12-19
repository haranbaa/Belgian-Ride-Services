<?php

use App\Http\Controllers\RideController;
use Illuminate\Support\Facades\Route;

// Home Page
Route::get('/', function () {
    return view('book-ride');
});

// Book a Ride Page
Route::get('/book-ride', function () {
    return view('book-ride');
});

// Handle Ride Booking (POST)
Route::post('/book-ride', [RideController::class, 'store']);

// Success Page
Route::get('/success', function () {
    return view('success');
});

// Contact Page
Route::get('/contact', function () {
    return view('contact');
});