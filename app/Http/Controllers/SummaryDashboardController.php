<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class SummaryDashboardController extends Controller
{
    public function summeryDashboard(Request $request)
    {
        $summary = [];
        if (!empty($request->startDate) && !empty($request->endDate)) {
            $data =  Http::timeout(60)->withHeaders([
                'Accept' => 'application/json'
            ])->withOptions(["verify" => false])->post('https://www.mygov.bd/api/new-a2i-dashboard', [
                'user' => 'a2i-dashboard',
                'password' => '9e7e781a60daf1b5fd42d777ade1afc4',
                'date' => date('Y-m-d', strtotime($request->endDate)),
                'startdate' => date('Y-m-d', strtotime($request->startDate)),
                'endtdate' => date('Y-m-d', strtotime($request->endDate)),
            ]);

            $response = $data->json();

            if ($response['status'] === 'success') {
                $data = $response['response']['data'];
                $summary = [
                    'number_ministries' => $data['total_ministry'],
                    'number_department' => $data['total_doptor'],
                    'number_offices' => $data['total_office'],
                    'number_digitized_services_g2c' => $data['citizen_service_all'],
                    'number_digitized_services_g2b' => $data['business_service_all'],
                    'number_digitized_services_g2e' => $data['govt_service_all'],
                    'number_digitized_services_total' => $data['digitized_service_all'],

                    'number_published_services_g2c' => $data['citizen_service_publish'],
                    'number_published_services_g2b' => $data['business_service_publish'],
                    'number_published_services_g2e' => $data['govt_service_publish'],
                    'number_published_services_total' => $data['digitized_service_publish'],


                    'number_unpublished_services_g2c' => $data['citizen_service_unpublish'],
                    'number_unpublished_services_g2b' => $data['business_service_unpublish'],
                    'number_unpublished_services_g2e' => $data['govt_service_unpublish'],
                    'number_unpublished_services_total' => $data['digitized_service_unpublish'],
                    'number_registered_user' => $data['total_user'],
                    'number_registered_user_male' => $data['total_user_male'],
                    'number_registered_user_female' => $data['total_user_female'],
                    'number_registered_user_others' => $data['total_user_others'],
                    'number_applicants' => $data['moreinfo'][0]['total_user_apply'],
                    'number_applicants_male' => $data['moreinfo'][0]['moreinfo2'][0]['male'],
                    'number_applicants_female' => $data['moreinfo'][0]['moreinfo2'][0]['female'],
                    'number_applicants_others' => $data['moreinfo'][0]['moreinfo2'][0]['others'],

                    'number_application_submitted' => $data['moreinfo'][0]['application_summary']['total_application'],
                    'number_application_resolved' => $data['moreinfo'][0]['application_summary']['total_complete_application'],
                    'number_apps_downloaded' => $data['app_download'],
                    'number_workshops' => $data['total_workshop'],
                    'number_participants_workshops' => $data['attendant_on_workshop'],
                    'number_participants_workshops_male' => $data['attendant_on_workshop_male'],
                    'number_participants_workshops_female' => $data['attendant_on_workshop_female'],


                ];
            }
        }

        return Inertia::render('SummaryDashboard', ['summary' => $summary]);
    }
}