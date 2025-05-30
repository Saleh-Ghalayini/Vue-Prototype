<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(RegisterRequest $request): JsonResponse
    {
        $result = $this->authService->register($request->validated());

        if (!$result['success']) {
            return response()->json($result, 400);
        }

        return response()->json($result, 201);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $result = $this->authService->login($request->validated());

        if (!$result['success']) {
            return response()->json($result, 401);
        }

        return response()->json($result);
    }

    public function logout(): JsonResponse
    {
        $result = $this->authService->logout();

        return response()->json($result);
    }

    public function refresh(): JsonResponse
    {
        $result = $this->authService->refresh();

        if (!$result['success']) {
            return response()->json($result, 401);
        }

        return response()->json($result);
    }

    public function me(): JsonResponse
    {
        $result = $this->authService->me();

        if (!$result['success']) {
            return response()->json($result, 401);
        }

        return response()->json($result);
    }
}
