<?php

namespace App\Http\Controllers;

use App\Services\GraduateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use App\Http\Requests\GraduateRequest;

class GraduateController extends Controller
{
    protected $graduateService;

    public function __construct(GraduateService $graduateService)
    {
        $this->graduateService = $graduateService;
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index(): JsonResponse
    {
        $result = $this->graduateService->getAll();

        if (!$result['success']) {
            return response()->json($result, 500);
        }

        return response()->json($result);
    }

    public function store(GraduateRequest $request): JsonResponse
    {
        $result = $this->graduateService->create($request->validated());

        if (!$result['success']) {
            return response()->json($result, 500);
        }

        return response()->json($result, 201);
    }

    public function show(int $id): JsonResponse
    {
        $result = $this->graduateService->getById($id);

        if (!$result['success']) {
            return response()->json($result, 404);
        }

        return response()->json($result);
    }

    public function update(GraduateRequest $request, int $id): JsonResponse
    {
        $result = $this->graduateService->update($id, $request->validated());

        if (!$result['success']) {
            return response()->json($result, 404);
        }

        return response()->json($result);
    }

    public function destroy(int $id): JsonResponse
    {
        $result = $this->graduateService->delete($id);

        if (!$result['success']) {
            return response()->json($result, 404);
        }

        return response()->json($result);
    }

    public function bookInterview(int $id): JsonResponse
    {
        $result = $this->graduateService->bookInterview($id);

        if (!$result['success']) {
            return response()->json($result, 404);
        }

        return response()->json($result);
    }
}
