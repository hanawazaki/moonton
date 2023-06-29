import React from 'react'
import Authenticated from '@/Layouts/Authenticated/Index'
import SubscriptionCard from '@/Components/SubscriptionCard'
import { Inertia } from '@inertiajs/inertia'
import { Head } from '@inertiajs/inertia-react'

const SubscriptionPlan = ({ auth, subscriptionPlans, env }) => {
  const selectSubscription = id => {
    Inertia.post(route('user.dashboard.subscriptionPlan.userSubscribe', {
      subscriptionPlan: id
    }),
      {},
      {
        only: ['userSubscription'],
        onSuccess: ({ props }) => {
          onSnapMidtrans(props.userSubscription);
        }
      }
    );
  };

  const onSnapMidtrans = (userSubscription) => {
    snap.pay(userSubscription.snap_token, {
      // Optional
      onSuccess: function (result) {
        Inertia.visit(route('user.dashboard.index'));
      },
      // Optional
      onPending: function (result) {
        console.log({ result })
      },
      // Optional
      onError: function (result) {
        console.log({ result })
      }
    })
  }

  return (
    <Authenticated auth={auth}>
      <Head title="Subscription Plan">
        <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
      </Head>
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