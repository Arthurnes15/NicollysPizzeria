<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('border_id');
            $table->unsignedInteger('dough_id');
            $table->foreign('border_id')->references('id')->on('borders');
            $table->foreign('dough_id')->references('id')->on('doughs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pizzas');
    }
};
