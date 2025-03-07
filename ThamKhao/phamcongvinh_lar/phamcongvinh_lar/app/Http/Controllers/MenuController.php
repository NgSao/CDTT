<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;

class MenuController extends Controller
{
    public function index()
    {
        $menu = Menu::where('status','!=',0)
            ->select("id","name","link","type","table_id")
            ->get();
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'menu'=>$menu
        ];
        return response()->json($result);
    }

    public function show($id)
    {
        $menu = Menu::find($id);
        if($menu==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'menu'=>$menu
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'banner'=>$menu
            ];
        }
        return response()->json($result);
    }

    public function store(StoreMenuRequest $request)
    {
        $menu = new Menu();
        $menu->name =  $request->name;
        $menu->link =  $request->link;
        $menu->type =  $request->type;
        $menu->table_id = $request->table_id;
        $menu->created_by =  1;
        $menu->created_at =  date('Y-m-d H:i:s');
        $menu->status =  $request->status;

            if($menu->save())
            {
                $result =[
                    'status'=>true,
                    'message'=>'Thêm thành công',
                    'menu'=>$menu
                ];
            }
            else
            {
                $result =[
                    'status'=>false,
                    'message'=>'Không thể thêm',
                    'banner'=>null
                ];
            }



        return response()->json($result);
    }
}
