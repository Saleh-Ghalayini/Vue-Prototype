<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GraduateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:graduates,email,' . $this->graduate],
            'skills' => ['required', 'array'],
            'skills.*' => ['string', 'max:100'],
            'photo' => ['nullable', 'string', 'max:2000'],
            'linkedIn' => ['nullable', 'string', 'max:2000', 'url'],
            'github' => ['nullable', 'string', 'max:2000', 'url'],
            'cv' => ['nullable', 'string', 'max:2000'],
            'videoCV' => ['nullable', 'string', 'max:2000', 'url'],
        ];
    }
}
