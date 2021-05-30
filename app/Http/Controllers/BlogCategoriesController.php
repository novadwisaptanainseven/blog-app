<?php

namespace App\Http\Controllers;

use App\Models\BlogCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogCategoriesController extends Controller
{

    public function index(Request $request)
    {

        $title = "Categories";
        $categories = [];

        if ($request->q) {
            $categories = BlogCategories::where('nama_kategori', 'LIKE', '%' . $request->q . '%')->get();
        } else {
            $categories = BlogCategories::latest()->get();
        }

        if ($request->q && $request->orderBy) {
            $categories = BlogCategories::where('name', 'LIKE', '%' . $request->q . '%')
                ->orderBy($request->orderBy, $request->order)->get();
            dd($categories);
        } elseif ($request->orderBy) {
            $categories = BlogCategories::orderBy($request->orderBy, $request->order)->get();
        }

        return view('admin.categories.index', compact('title', 'categories'));
    }

    public function create()
    {
        $title = "Create New Category";

        return view('admin.categories.create', compact('title'));
    }

    public function store(Request $request)
    {
        $messages = [
            "name" => ":attribute harus diisi",
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|max:40'
            ],
            $messages
        );

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput()
                ->with('error', 'Something went wrong');
        }

        BlogCategories::create([
            'nama_kategori' => $request->name
        ]);

        return redirect()->route('categories')->with('success', 'Data has been saved');
    }

    public function edit(BlogCategories $category)
    {
        $data = $category;
        $title = "Edit Category {$category->name} - " . env("APP_NAME");

        return view('admin.categories.edit', compact('title', 'data'));
    }

    public function update(BlogCategories $category, Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'nama_kategori' => 'required|max:255'
            ]
        );

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput()
                ->with('error', 'Something went wrong.');
        }

        $category->update($request->all());

        return redirect()->route('categories')->with('success', 'Data has been updated');
    }

    public function destroy(BlogCategories $category)
    {
        $category->delete();

        return redirect()->route('categories')->with('success', 'Data has been deleted');
    }
}
