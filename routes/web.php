<?php

use App\Http\Controllers\CitizenController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OidcClientController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\SummaryDashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


/**Dashboard Route**/
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard/summary', [SummaryDashboardController::class, 'summeryDashboard'])->middleware(['auth'])->name('summary.dashboard');


Route::resource('oidc', OidcClientController::class)->middleware(['auth', 'verified']);

Route::get('/dasbhoard/citizen', [CitizenController::class, 'index'])->name('citizen.index');
Route::get('/dasbhoard/{citizen}/citizen', [CitizenController::class, 'show'])->name('citizen.show');


/**Rest process (NID, TIN, BRN)**/
Route::get('/dasbhoard/{citizen_id}/reset-nid', [ResetController::class, 'resetNid'])->name('reset.nid');
Route::get('/dasbhoard/{citizen_id}/reset-tin', [ResetController::class, 'resetTin'])->name('reset.tin');
Route::get('/dasbhoard/{citizen_id}/reset-brn', [ResetController::class, 'resetBrn'])->name('reset.brn');

Route::get('/dasbhoard/modal', [CitizenController::class, 'modal']);


require __DIR__ . '/auth.php';