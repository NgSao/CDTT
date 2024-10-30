<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $menu = User::where('status','!=',0)
            ->select(
            'id',
            'name',
            'email',
            'phone',
            'address',
            'gender',
            'thumbnail',
            'roles',
            'username',
            'password',
            'status')
            ->get();
            foreach ($menu as $user) {
                $user->thumbnail = url('images/user/' . $user->thumbnail); // Thêm URL đầy đủ cho ảnh
            }
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'user'=>$menu
        ];
        return response()->json($result);
    }

    public function show($id)
    {
        $user = User::find($id);
        if($user==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'user'=>$user
            ];
        }
        else
        {
            $menu = User::where('id','=',$id)
            ->select(
            'id',
            'name',
            'email',
            'phone',
            'address',
            'gender',
            'thumbnail',
            'roles',
            'username',
            'password',
            'status')
            ->get();
            foreach ($menu as $user) {
                $user->thumbnail = url('images/user/' . $user->thumbnail); // Thêm URL đầy đủ cho ảnh
            }

            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'user'=>$menu
            ];
        }
        return response()->json($result);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'user' => $user
            ];
        } else {

            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->address = $request->address;
            $user->gender = $request->gender;
            $list_exten = ['jpg', 'png', 'webp', 'gif'];
            if ($request->hasFile('thumbnail')) {
                $exten = $request->thumbnail->extension();

                // Kiểm tra định dạng tệp
                if (in_array($exten, $list_exten)) {
                    // Tạo tên tệp mới
                    $thumbnailName = date('YmdHis') . "." . $exten;
                    // Di chuyển tệp vào thư mục public/images/user
                    $request->thumbnail->move(public_path('images/user'), $thumbnailName);

                    // Cập nhật thumbnail trong cơ sở dữ liệu
                    $user->thumbnail = $thumbnailName; // Cập nhật hình ảnh
                } else {
                    return response()->json(['status' => false, 'message' => 'Định dạng tệp không hợp lệ'], 400);
                }
            }
            $user->roles = $request->roles;
            $user->username = $request->username;
            $user->updated_by = 1;
            $user->updated_at = date('Y-m-d H:i:s');

            // Lưu lại các thay đổi
            $user->save();

            $result = [
                'status' => true,
                'message' => 'Sửa thành công',
                'user' => $user
            ];
        }

        return response()->json($result);
    }

    public function updatePStatus(Request $request, $id)
    {
        $user = User::find($id);


        if ($user == null) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'user' => null
            ]);
        }

        if (!in_array($request->status, [2, 1])) {
            return response()->json([
                'status' => false,
                'message' => 'Status chỉ nhận giá trị 1 hoặc 2',
                'user' => null
            ]);
        }

        $user->status = $request->status;


        if ($user->save()) {
            return response()->json([
                'status' => true,
                'message' => 'Sửa thành công',
                'user' => $user
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Sửa thất bại',
                'user' => null
            ]);
        }
    }

    public function trash()
    {
        $user = User::where('status','=',0)

            ->select('id',
            'name',
            'email',
            'phone',
            'address',
            'gender',
            'thumbnail',
            'roles',
            'username',
            'password',
            'status')
            ->get();
            foreach ($user as $user) {
                $user->thumbnail = url('images/user/' . $user->thumbnail); // Thêm URL đầy đủ cho ảnh
            }
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'user'=>$user
        ];
        return response()->json($result);
    }
    public function trashdelete($id)
    {

        $user = User::find($id);


        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy danh mục',
            ], 404);
        }


        $user->delete();


        $user = User::where('status', '=', 0)
            ->orderBy('sort_order', 'ASC')
            ->select('id',
            'name',
            'email',
            'phone',
            'address',
            'gender',
            'thumbnail',
            'roles',
            'username',
            'password',
            'status')
            ->get();

        // Thêm URL đầy đủ cho ảnh
        foreach ($user as $user) {
            $user->image = url('images/user/' . $user->image);
        }

        // Trả về kết quả
        $result = [
            'status' => true,
            'message' => 'Xóa và tải dữ liệu thành công',
            'user' => $user
        ];

        return response()->json($result);
    }

    public function delete($id)
    {
        $user = User::find($id);
        if($user==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'user'=>$user
            ];
        }
        else
        {
            $user->status = 0;
            $user->updated_by =  1;
            $user->updated_at =  date('Y-m-d H:i:s');
            $user->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'user'=>$user
            ];
        }
        return response()->json($result);
    }
}
