<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\UserAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CitizenController extends Controller
{
    public function index()
    {
        $citizens = UserAuth::with('profile')->paginate(20);
        return Inertia::render('Citizens/index', ['citizens' => $citizens]);
    }


    public function show(UserAuth $citizen)
    {
        $citizen->load('profile', 'userIdentity');

        return Inertia::render('Citizens/details', ['user' => $citizen]);
    }
}