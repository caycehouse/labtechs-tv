<?php

namespace App\Http\Controllers;

use App\Device;
use App\PapercutStatuses;
use App\Printer;
use App\Resolution;
use App\Ticket;
use Carbon\Carbon;

class DashboardController extends Controller
{
    /**
     * Show the dashboard.
     *
     * @return Response
     */
    public function __invoke($resp_group)
    {
        $tickets = Ticket::unresolved()->byResponsibleGroup($resp_group)->get();

        if ('+Student Computer Labs' == $resp_group) {
            $devices = Device::inError()->get();
            $papercutStatuses = PapercutStatuses::all();
            $printers = Printer::inError()->get();

            $fromDate = Carbon::now()->startOfWeek()->toDateTimeString();
            $tillDate = Carbon::now()->toDateTimeString();
            $resolutionsLastWeek = Resolution::where('period', '=', 'last_week')->get();
            $resolutionsThisWeek = Resolution::where('period', '=', 'this_week')->get();

            return view('dashboard.index', [
                'devices' => $devices,
                'tickets' => $tickets,
                'papercutStatuses' => $papercutStatuses,
                'printers' => $printers,
                'resolutionsLastWeek' => $resolutionsLastWeek,
                'resolutionsThisWeek' => $resolutionsThisWeek,
            ]);
        } else {
            return view('dashboard.index', [
                'tickets' => $tickets,
            ]);
        }
    }
}