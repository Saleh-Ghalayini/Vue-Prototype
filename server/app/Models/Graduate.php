<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Graduate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'skills',
        'photo',
        'linkedIn',
        'github',
        'cv',
        'videoCV',
    ];

    protected $casts = [
        'skills' => 'array',
    ];
}
