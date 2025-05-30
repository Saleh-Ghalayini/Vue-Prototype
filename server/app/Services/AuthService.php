<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register(array $data): array
    {
        try {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            $token = Auth::guard('api')->login($user);

            return [
                'success' => true,
                'user' => $user,
                'token' => $token,
                'message' => 'User created successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function login(array $credentials): array
    {
        try {
            $token = Auth::guard('api')->attempt($credentials);

            if (!$token) {
                return [
                    'success' => false,
                    'message' => 'Invalid credentials'
                ];
            }

            $user = Auth::guard('api')->user();

            return [
                'success' => true,
                'user' => $user,
                'token' => $token,
                'message' => 'User logged in successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function logout(): array
    {
        try {
            Auth::guard('api')->logout();

            return [
                'success' => true,
                'message' => 'User logged out successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function refresh(): array
    {
        try {
            $token = Auth::guard('api')->login(Auth::guard('api')->user());

            return [
                'success' => true,
                'user' => Auth::guard('api')->user(),
                'token' => $token,
                'message' => 'Token refreshed successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    public function me(): array
    {
        try {
            return [
                'success' => true,
                'user' => Auth::guard('api')->user(),
                'message' => 'User retrieved successfully'
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
