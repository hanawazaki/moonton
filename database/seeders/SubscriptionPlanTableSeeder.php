<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
            "name" => "Basic",
            "price" => 200000,
            "active_period_in_months" => 3,
            "features" => json_encode([
                "HD",
                "Ultra HD",
                "4K",
                "1080p",
                "720p",
                "480p",
                "360p",
                "240p",
                "144p",
            ]),
            ],
            [
                "name" => "Premium",
                "price" => 800000,
                "active_period_in_months" => 6,
                "features" => json_encode([
                    "HD",
                    "Ultra HD",
                    "4K",
                    "1080p",
                    "720p",
                    "480p",
                    "360p",
                    "240p",
                    "144p",
                ]),
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
