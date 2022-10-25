<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\OidcClient;
use Illuminate\Http\Request;

class OidcClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $clients = OidcClient::all();
        return Inertia::render('Clients', [
            'clients' => $clients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('ClientCreate', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'project_url' => 'required',
            'login_url' => 'required',
            'logout_url' => 'required',
            'redirect_url' => 'required',
            'client_id' => 'required',
            'client_secreet' => 'required',
            'logo_url' => 'required'
        ]);

        $client = new OidcClient();
        $client->name = $request->name;
        $client->project_url = $request->project_url;
        $client->login_url = $request->login_url;
        $client->logout_url = $request->logout_url;
        $client->logo_url = $request->logo_url;
        $client->redirect_url = $request->redirect_url;
        $client->client_id = $request->client_id;
        $client->client_secreet = $request->client_secreet;
        $client->save();
        return redirect()->back()->with('FlsMsg', 'Successfully Updated');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OidcClient  $oidcClient
     * @return \Illuminate\Http\Response
     */
    public function show(OidcClient $oidcClient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OidcClient  $oidcClient
     * @return \Illuminate\Http\Response
     */
    public function edit(OidcClient $oidcClient, $id)
    {
        $client = OidcClient::findOrFail($id);
        return Inertia::render('ClientEdit', [
            'client' => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OidcClient  $oidcClient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client = OidcClient::findOrFail($id);
        $client->name = $request->name;
        $client->project_url = $request->project_url;
        $client->login_url = $request->login_url;
        $client->logout_url = $request->logout_url;
        $client->logo_url = $request->logo_url;
        $client->redirect_url = $request->redirect_url;
        $client->client_id = $request->client_id;
        $client->client_secreet = $request->client_secreet;
        $client->save();
        return redirect()->back()->with('FlsMsg', 'Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OidcClient  $oidcClient
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = OidcClient::findOrFail($id);
        $client->delete();
        return redirect()->back()->with('FlsMsg', 'Successfully Deleted');
    }
}