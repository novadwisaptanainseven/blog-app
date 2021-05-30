@php
 $routeName = $attributes->get('routeName');
 $name = $attributes->get('name');
 $orderBy = $attributes->get('orderBy');
@endphp

<a class="flex items-center gap-2" href="{{ route($routeName) . '?q=' . Request::get('q') . '&orderBy=' . $orderBy . '&order=' . (Request::get('order') ? Request::get('order') == 'DESC' ? 'ASC' : 'DESC' : 'DESC') }}">
    <span>{{ $name }}</span>
    
    @if (Request::get('orderBy') === $orderBy)
        @if (Request::get('order') === 'DESC')
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
        @else
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        @endif
    @endif
</a>