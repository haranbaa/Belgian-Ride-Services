<?php

use App\Http\Controllers\RideController;
use App\Http\Controllers\ContactMessageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route for booking a ride
Route::post('/book-ride', [RideController::class, 'store']);

// Route for submitting a contact form message (example)
Route::post('/contact', [ContactMessageController::class, 'store']);

/*
|--------------------------------------------------------------------------
| Fallback Route
|--------------------------------------------------------------------------
|
| If a route is not matched, return a JSON error response.
|
*/
Route::fallback(function () {
    return response()->json([
        'message' => 'API route not found.'
    ], 404);
});
