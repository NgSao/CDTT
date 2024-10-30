<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Config;

class ConfigController extends Controller
{
    public function index()
    {
        $configs = Config::where('status','!=',0)
            ->select("id","site_name","email","address","hotline","phone","author","status","created_at")
            ->get();
            if($configs->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'configs' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'configs'=>$configs
                ];
            }
        return response()->json($result);
    }


    public function store(Request $request)
    {
        $config = new Config();
        $config->site_name =  $request->site_name;
        $config->email =  $request->email;
        $config->address =  $request->address;
        $config->hotline =  $request->hotline;
        $config->phone =  $request->phone;
        $config->author =  $request->author;
        $config->status =  1;
        $config->created_at = date('Y-m-d H:i:s');
        if($config->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'config'=>$config
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'config'=>null
            ];
        }

        return response()->json($result);
    }


    // public function update(UpdateconfigRequest $request, $id)
    // {
    //     $config = config::find($id);
    //     if($config==null)
    //     {
    //         $result =[
    //             'status'=>false,
    //             'message'=>'Không tìm thấy dữ liệu',
    //             'config'=>$config
    //         ];
    //     }
    //     else
    //     {
    //         $config->name =  $request->name;
    //         $config->slug =  $request->slug;
    //         $config->description =  $request->description;
    //         if($request->thumbnail)
    //         {
    //             $imagePath = public_path('images/config/'. $config->thumbnail);
    //             if ($config->thumbnail && file_exists(public_path('images/config/'. $config->thumbnail))) {
    //                 unlink($imagePath);
    //             }

    //             $exten=$request->thumbnail->extension();
    //             $thumbnailName = date('YmdHis').".".$exten;
    //             $request->thumbnail->move(public_path('images/config'), $thumbnailName);
    //             $config->thumbnail =  $thumbnailName;
    //         }
    //         $config->sort_order =  $request->sort_order??1;
    //         $config->status =  $request->status??1;
    //         $config->updated_by =  1;
    //         $config->updated_at =  date('Y-m-d H:i:s');
    //         $config->save();
    //         $result =[
    //             'status'=>true,
    //             'message'=>'Sửa thành công',
    //             'config'=>$config
    //         ];
    //     }
    //     return response()->json($result);
    // }


}