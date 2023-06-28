<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Illuminate\Http\Request;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $status)
    {
        if ($status == 'true' && !Auth::user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        }
        if ($status == 'false' && Auth::user()->isActive) {
            return redirect(route('user.dashboard.index'));
        }
        return $next($request);
    }
}
