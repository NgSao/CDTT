<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class StoreMenuRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required',
            'link' => 'required',
            'type' => 'required',


        ];

    }
    public function messages(): array
    {
        return [
            'name.required' => 'Tên không được để trống',
            'link.required'=>'Link không được để trống',
            'type.required'=>'Type không được để trống',
        ];
    }

    public function failedValidation(Validator $validator)
    {
            throw new HttpResponseException(response()->json([
                'status' => false,
                'message' => 'Validation errors',
                'menus' => $validator->errors()
            ]));
    }




}