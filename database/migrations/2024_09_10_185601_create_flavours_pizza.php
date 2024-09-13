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
        Schema::create('flavours_pizza', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pizza_id');
            $table->unsignedInteger('flavour_id');
            $table->foreign('pizza_id')->references('id')->on('pizzas');
            $table->foreign('flavour_id')->references('id')->on('flavours');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flavours_pizza');
    }
};
