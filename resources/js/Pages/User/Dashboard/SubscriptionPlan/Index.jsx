import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import SubscriptionCard from '@/Components/SubscriptionCard'
import { Inertia } from '@inertiajs/inertia'

const SubscriptionPlan = ({ auth, subscriptionPlans }) => {
  const selectSubscription = id => {
    Inertia.post(route('user.dashboard.subscriptionPlan.userSubscribe', {
      subscriptionPlan: id
    })
    );
  };

  return (
    <Authenticated auth={auth}>
      <div className="py-20 flex flex-col items-center">
        <div className="text-black font-semibold text-[26px] mb-3">
          Pricing for Everyone
        </div>
        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
          Invest your little money to get a whole new experiences from movies.
        </p>

        {/* <!-- Pricing Card --> */}
        <div className="flex justify-center gap-10 mt-[70px]">
          {/* <!-- Basic --> */}
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard
              name={plan.name}
              price={plan.price}
              durationInMonth={plan.active_period_in_month}
              features={JSON.parse(plan.features)}
              isPremium={plan.name === "Premium"}
              key={plan.id}
              onSelectSubscription={() => selectSubscription(plan.id)}
            />
          ))}
          {/* <!-- For Greatest --> */}

        </div>
        {/* <!-- /Pricing Card --> */}
      </div>
    </Authenticated>
  )
}

export default SubscriptionPlan