<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserProfile extends Authenticatable
{
    use Notifiable;

    protected $table = 'sso_user_profile';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $casts = ['id' => 'string'];

    protected $fillable = ['mobile', 'citizen_id', 'password', 'name', 'profile_path'];
}