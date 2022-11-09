<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserIdentity extends Authenticatable
{
    use Notifiable;

    protected $table = 'sso_user_identity';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $casts = ['id' => 'string'];

    protected $fillable = ['email', 'mobile', 'citizen_id', 'password', 'nid', 'nid_verify'];




    /**
     * Get data conditon wise for Filter and normal view
     *
     * @param string $mobile
     * @param string $email
     * @param string $nid
     * @return void
     */
    public function getUsers($mobile = '', $email = '', $nid = '')
    {
        $users = DB::table('sso_user_identity')->select('citizen_id', 'mobile', 'email', 'nid', 'status', 'created_at', 'source')->where('source', 'prantik');

        if ($mobile) {
            $users = $users->where('mobile', $mobile);
        }

        if ($email) {
            $users = $users->where('email', $email);
        }

        if ($nid) {
            $users = $users->where('nid', $nid);
        }

        return $users->paginate(20);
    }
}