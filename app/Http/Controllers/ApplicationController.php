<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApplicationController extends Controller
{
    public function applicationByMobile()
    {
        $response = Http::post('http://example.com/users', [
            'mobile' => 'Steve',
            'role' => 'Network Administrator',
        ]);
    }
}