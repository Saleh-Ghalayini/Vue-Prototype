<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a default recruiter account
        User::create([
            'name' => 'Recruiter',
            'email' => 'recruiter@example.com',
            'password' => Hash::make('password'),
        ]);

        // Run the graduate seeder
        $this->call(GraduateSeeder::class);
    }
}
