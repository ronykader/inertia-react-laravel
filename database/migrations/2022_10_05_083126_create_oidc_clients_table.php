<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oidc_clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('project_url');
            $table->string('login_url');
            $table->string('redirect_url');
            $table->string('logout_url');
            $table->string('logo_url');
            $table->string('client_id');
            $table->string('client_secreet');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('oidc_clients');
    }
};