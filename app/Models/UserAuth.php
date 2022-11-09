<?php

namespace App\Models;

use App\Models\UserProfile;
use App\Models\UserIdentity;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserAuth extends Authenticatable
{
    use Notifiable;

    protected $table = 'sso_user_login';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $casts = ['id' => 'string'];

    protected $fillable = ['email', 'mobile', 'citizen_id', 'password', 'nid'];


    /**
     * Get user's Identity details
     *
     * @return void
     */
    public function userIdentity()
    {
        return $this->hasOne(UserIdentity::class, 'citizen_id', 'citizen_id');
    }

    /**
     * Get user's profile details
     *
     * @return void
     */
    public function profile()
    {
        return $this->hasOne(UserProfile::class, 'citizen_id', 'citizen_id');
    }
    public function getProfile()
    {
        return $this->hasOne(UserProfile::class, 'citizen_id', 'citizen_id');
    }
}