@extends('layouts.app')

@section('title', $title)

@section('content')
  <div class="container px-6 mx-auto grid">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">{{ $title }}</h2>

    @include('layouts.alert')

    <div class="flex items-center justify-between mb-8 text-sm font-semibold text-white ">
      <form action="{{ route('categories') }}" method="GET">
        <div class="relative text-gray-500 focus-within:text-purple-600 w-80">
          <input class="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input" placeholder="Find category" name="q" value="{{ Request::get('q') }}" />
          <button type="submit" class="absolute inset-y-0 right-0 px-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
      </div>
      </form>

      <a class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple" href="{{ route('categories.create') }}">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -ml-1 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        <span>Add New Category</span>
      </a>
    </div>

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">
              <x-sorting-table-header 
                name="Category Name" 
                routeName="categories"
                orderBy="nama_kategori"
              />
            </th>
            <th class="px-4 py-3">
              <x-sorting-table-header 
                name="Status" 
                routeName="categories"
                orderBy="aktif"
              />
            </th>
            <th class="px-4 py-3">
              <x-sorting-table-header 
                name="Created At" 
                routeName="categories"
                orderBy="created_at"
              />
            </th>
            <th class="px-4 py-3">
              <x-sorting-table-header 
                name="Updated At" 
                routeName="categories"
                orderBy="updated_at"
              />
            </th>
            <th class="px-4 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
        >
          @foreach ($categories as $item)   
          <tr class="text-gray-700 dark:text-gray-400">
            <td class="px-4 py-3 text-sm">
              {{ $item->nama_kategori }}
            </td>
            <td class="px-4 py-3 text-xs">
              <span
                class="{{ $item->aktif == 'y' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'  }} px-2 py-1 font-semibold leading-tight rounded-full dark:bg-green-700 dark:text-green-100"
              >
                {{ $item->aktif == 'y' ? 'Active' : 'Not Activated' }}
              </span>
            </td>
            <td class="px-4 py-3 text-sm">
              {{ \Carbon\Carbon::parse($item->created_at)->diffForHumans() }}
            </td>
            <td class="px-4 py-3 text-sm">
              {{ \Carbon\Carbon::parse($item->updated_at)->diffForHumans() }}
            </td>
            <td class="px-4 py-3">
              <div class="relative" x-data="{ open: false }">
                  <svg @click="open = true" @keydown.escape="open = false" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>

                  <template x-if="open">
                      <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" @click.away="open = false" @keydown.escape="open = false" class="absolute right-0 w-36 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700 z-10" aria-label="submenu">
                          <li class="flex">
                              <a class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="{{ route('categories.edit', $item->id) }}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                  <span>Edit</span>
                              </a>
                          </li>
                          <form action="{{ route('categories.delete', $item) }}" method="POST">
                              @method('DELETE')
                              @csrf

                              <li class="flex">
                                  <a id="showConfirmDelete" class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200" href="#" onclick="showConfirmDelete(event, {{ $item->id }}, this)">
                                      <svg class="w-4 h-4 mr-3" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                      <span>Delete</span>
                                  </a>
                              </li>
                          </form>
                      </ul>
                  </template>
              </div>
          </td>
          </tr>
          @endforeach

        </tbody>
      </table>

      @if (!$categories->count())
          @include('empty-state')
      @endif
    </div>

  </div>
@endsection

@push('scripts')
    <script>
      function showConfirmDelete(e, id, ref) {
        e.preventDefault();
        // window.confirm('Anda yakin ingin hapus data ' + id + ' ?');
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            ref.closest('form').submit();
          }
        })
      }
    </script>
@endpush