<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GraduateController;

Route::group(['prefix' => 'v1'], function () {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
        Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api');
        Route::get('/me', [AuthController::class, 'me'])->middleware('auth:api');
    });

    Route::group(['prefix' => 'graduates'], function () {
        Route::get('/', [GraduateController::class, 'index']);

        Route::middleware(['auth:api'])->group(function () {
            Route::get('/{id}', [GraduateController::class, 'show']);
            Route::post('/', [GraduateController::class, 'store']);
            Route::put('/{id}', [GraduateController::class, 'update']);
            Route::delete('/{id}', [GraduateController::class, 'destroy']);
            Route::post('/{id}/book-interview', [GraduateController::class, 'bookInterview']);
        });
    });
});
