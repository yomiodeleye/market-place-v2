import { CardSkeleton } from '@/src/components/card-skeleton'
import { DashboardHeader } from '@/src/components/dashboard-header'
import { DashboardShell } from '@/src/components/shell'

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
