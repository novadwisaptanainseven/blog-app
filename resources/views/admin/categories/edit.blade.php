@extends('layouts.app')

@section('title', $title)

@section('content')
    <div class="container px-6 mx-auto grid">
      <div class="flex items-center">
        <a href="{{ route('categories') }}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </a>
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">{{ $title }}</h2>
      </div>

      @include('layouts.alert')

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form action="{{ route('categories.update', $data) }}" method="POST">
          @csrf
          @method('PATCH')

          <label for="">
            <span>Name</span>
            <input 
              type="text" 
              name="nama_kategori"
              value="{{ $data->nama_kategori ?? old('nama_kategori') }}"
              class="@if ($errors->has('nama_kategori')) borders-red-600 @endif block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input mb-3" />

              @error('nama_kategori')
                  <span class="block mt-1 text-xs text-red-600 dark:text-red-400">
                    {{ $message }}
                  </span>
              @enderror
          </label>

          <label for="">
            <span>Status</span>
            <select name="aktif" id="aktif" class="@if ($errors->has('aktif')) borders-red-600 @endif block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input">
              <option value="y" {{ $data->aktif === 'y' ? 'selected' : null }}>Active</option>
              <option value="n" {{ $data->aktif === 'n' ? 'selected' : null }}>Not Activated</option>
            </select>

              @error('aktif')
                  <span class="block mt-1 text-xs text-red-600 dark:text-red-400">
                    {{ $message }}
                  </span>
              @enderror
          </label>

          <div class="flex justify-end">
            <button id="reset" type="reset" class="block px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray mr-4">Reset</button>
            <button type="submit" class="block px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">Save</button>
          </div>
        </form>
      </div>
    </div>
@endsection