<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;

class Flavours_Pizza extends Model
{
    use HasFactory;
    public function flavour(): HasMany
    {
        return $this->hasMany(Flavour::class);
    }
    public function pizza(): HasOne
    {
        return $this->hasOne(Pizza::class);
    }
}
