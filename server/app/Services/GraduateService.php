<?php

namespace App\Services;

use App\Models\Graduate;
use Illuminate\Support\Facades\Log;

class GraduateService
{
    public function getAll(): array
    {
        try {
            $graduates = Graduate::all();

            return [
                'success' => true,
                'data' => $graduates,
                'message' => 'Graduates retrieved successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error retrieving graduates: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Failed to retrieve graduates'
            ];
        }
    }

    public function getById(int $id): array
    {
        try {
            $graduate = Graduate::findOrFail($id);

            return [
                'success' => true,
                'data' => $graduate,
                'message' => 'Graduate retrieved successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error retrieving graduate: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Graduate not found'
            ];
        }
    }

    public function create(array $data): array
    {
        try {
            $graduate = Graduate::create($data);

            return [
                'success' => true,
                'data' => $graduate,
                'message' => 'Graduate created successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error creating graduate: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Failed to create graduate'
            ];
        }
    }

    public function update(int $id, array $data): array
    {
        try {
            $graduate = Graduate::findOrFail($id);
            $graduate->update($data);

            return [
                'success' => true,
                'data' => $graduate,
                'message' => 'Graduate updated successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error updating graduate: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Failed to update graduate'
            ];
        }
    }

    public function delete(int $id): array
    {
        try {
            $graduate = Graduate::findOrFail($id);
            $graduate->delete();

            return [
                'success' => true,
                'message' => 'Graduate deleted successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error deleting graduate: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Failed to delete graduate'
            ];
        }
    }

    public function bookInterview(int $id): array
    {
        try {
            $graduate = Graduate::findOrFail($id);

            return [
                'success' => true,
                'message' => 'Interview request sent successfully'
            ];
        } catch (\Exception $e) {
            Log::error('Error booking interview: ' . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Failed to book interview'
            ];
        }
    }
}
