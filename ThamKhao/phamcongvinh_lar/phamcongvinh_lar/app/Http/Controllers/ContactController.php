<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contact = Contact::where('status','!=',0)
            ->select("id","name","email","phone","title","content","replay_id")
            ->get();
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'contact'=>$contact
        ];
        return response()->json($result);
    }
    public function trash()
    {
        $contact = Contact::where('status','=',0)
            ->select("id","name","email","phone","title","content","replay_id")
            ->get();
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'contact'=>$contact
        ];
        return response()->json($result);
    }

    public function show($id)
    {
        $contact = Contact::find($id);
        if($contact==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'contact'=>$contact
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'contact'=>$contact
            ];
        }
        return response()->json($result);
    }


    
}
