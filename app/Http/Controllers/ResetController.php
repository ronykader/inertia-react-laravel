<?php

namespace App\Http\Controllers;

use App\Models\UserAuth;
use App\Models\UserProfile;
use Illuminate\Http\RedirectResponse;

class ResetController extends Controller
{
    /**
     * TODO: 
     *      Need to rest nid from sso_user_login
     *      Need to rest nid and nid_verify from sso_user_identity
     *
     * @param [type] $citzen_id
     * @return RedirectResponse
     */
    public function resetNid($citzen_id): RedirectResponse
    {
        try {
            $user = UserAuth::where('citizen_id', $citzen_id)->first();
            $user->nid = NULL;
            $user->userIdentity->nid = NULL;
            $user->userIdentity->nid_verify = 0;
            $user->save();
            return redirect()->back();
        } catch (\Throwable $th) {
            return "Please check this error" . $th->getMessage();
        }
    }

    /**
     * TODO: 
     *      Need to rest tin and tin_verify from sso_user_identity
     *
     * @param [type] $citzen_id
     * @return RedirectResponse
     */
    public function resetTin($citzen_id): RedirectResponse
    {
        try {
            $user = UserAuth::where('citizen_id', $citzen_id)->first();
            $user->userIdentity->tin = NULL;
            $user->userIdentity->tin_verify = 0;
            $user->save();
            return redirect()->back();
        } catch (\Throwable $th) {
            return "Please check this error" . $th->getMessage();
        }
    }

    /**
     * TODO: 
     *      Need to rest BRN and brn_verify from sso_user_identity
     *      Need to rest date_of_birth from sso_user_profile
     *
     * @param [type] $citzen_id
     * @return RedirectResponse
     */
    public function resetBrn($citzen_id): RedirectResponse
    {
        try {
            $user = UserAuth::where('citizen_id', $citzen_id)->first();
            $user->userIdentity->brn = NULL;
            $user->userIdentity->brn_verify = 0;
            $user->save();
            UserProfile::where('citizen_id', $citzen_id)->update(['date_of_birth' => NULL]);
            return redirect()->back();
        } catch (\Throwable $th) {
            return "Please check this error" . $th->getMessage();
        }
    }
}